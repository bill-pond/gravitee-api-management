import { Config, workflow, Workflow } from '@circleci/circleci-config-sdk';
import { BuildBackendJob, SetupJob } from '../jobs';
import { ElasticTestContainerJob, JdbcTestContainerJob, MongoTestContainerJob, RedisTestContainerJob } from '../jobs/test-container';

import { CircleCIEnvironment } from '../pipelines';

export class DbRepositoriesTestContainerWorkflow {
  static create(dynamicConfig: Config, environment: CircleCIEnvironment) {
    const setupJob = SetupJob.create(dynamicConfig);
    const buildJob = BuildBackendJob.create(dynamicConfig, environment);
    const jdbcTestContainerJob = JdbcTestContainerJob.create(dynamicConfig);
    const mongoTestContainerJob = MongoTestContainerJob.create(dynamicConfig);
    const elasticTestContainerJob = ElasticTestContainerJob.create(dynamicConfig);
    const opensearchTestContainerJob = ElasticTestContainerJob.create(dynamicConfig);
    const redisTestContainerJob = RedisTestContainerJob.create(dynamicConfig);

    dynamicConfig.addJob(setupJob);
    dynamicConfig.addJob(buildJob);
    dynamicConfig.addJob(jdbcTestContainerJob);
    dynamicConfig.addJob(mongoTestContainerJob);
    dynamicConfig.addJob(elasticTestContainerJob);
    dynamicConfig.addJob(opensearchTestContainerJob);
    dynamicConfig.addJob(redisTestContainerJob);

    const setupJobName = 'Setup';
    const buildJobName = 'Build';

    return new Workflow('db-repositories-test-container', [
      new workflow.WorkflowJob(setupJob, { name: setupJobName, context: ['cicd-orchestrator'] }),
      new workflow.WorkflowJob(buildJob, { name: buildJobName, context: ['cicd-orchestrator'], requires: [setupJobName] }),
      new workflow.WorkflowJob(jdbcTestContainerJob, {
        name: 'Management repository tests - JDBC - << matrix.jdbcType >>',
        context: ['cicd-orchestrator'],
        requires: [buildJobName],
        matrix: {
          jdbcType: [
            'postgresql~11',
            'postgresql~12',
            'postgresql~13',
            'postgresql~14',
            'postgresql~15',
            'mariadb~10.4',
            'mariadb~10.5',
            'mariadb~10.6',
            'mariadb~10.10',
            'mariadb~10.11',
            'mariadb~11',
            'mysql~5.7',
            'mysql~8.0',
            'sqlserver~2017-latest',
            'sqlserver~2019-latest',
            'sqlserver~2022-latest',
          ],
        },
      }),
      new workflow.WorkflowJob(mongoTestContainerJob, {
        name: 'Management repository tests - Mongo << matrix.mongoVersion >>',
        context: ['cicd-orchestrator'],
        requires: [buildJobName],
        matrix: {
          mongoVersion: ['4.4', '5.0', '6.0', '7.0'],
        },
      }),
      new workflow.WorkflowJob(elasticTestContainerJob, {
        name: 'Analytics repository tests - ElasticSearch << matrix.engineVersion >>',
        context: ['cicd-orchestrator'],
        requires: [buildJobName],
        matrix: {
          engineType: ['elasticsearch'],
          engineVersion: ['7.17.10', '8.8.1'],
        },
      }),
      new workflow.WorkflowJob(opensearchTestContainerJob, {
        name: 'Analytics repository tests - OpenSearch << matrix.engineVersion >>',
        context: ['cicd-orchestrator'],
        requires: [buildJobName],
        matrix: {
          engineType: ['opensearch'],
          engineVersion: ['1', '2'],
        },
      }),
      new workflow.WorkflowJob(redisTestContainerJob, {
        name: 'Rate Limit repository tests - Redis << matrix.redisVersion >>',
        context: ['cicd-orchestrator'],
        requires: [buildJobName],
        matrix: {
          redisVersion: ['6.2.6-v9', '7.0.6-RC9'],
        },
      }),
    ]);
  }
}