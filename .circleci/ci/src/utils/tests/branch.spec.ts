/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { isMasterBranch, isSupportBranch, isSupportBranchOrMaster, sanitizeBranch } from '../branch';

describe('branch', function () {
  describe('sanitize', function () {
    it.each`
      branchToSanitize                                                                                                  | sanitizedBranch
      ${'APIM-1234-my-custom-branch'}                                                                                   | ${'apim-1234-my-custom-branch'}
      ${'feat/my#new!version~wip'}                                                                                      | ${'feat-my-new-versionwip'}
      ${'--a-very-long-branch-name-with-more-than-sixty-characters-because-the-sanitization-keeps-only-60-charaters--'} | ${'a-very-long-branch-name-with-more-than-sixty-characters-beca'}
    `('returns sanitized version of $branchToSanitize', ({ branchToSanitize, sanitizedBranch }) => {
      expect(sanitizeBranch(branchToSanitize)).toEqual(sanitizedBranch);
    });
  });

  describe('isMaster', function () {
    it.each`
      branch          | expected
      ${'not-master'} | ${false}
      ${'master'}     | ${true}
    `('returns $expected is $branch is master', ({ branch, expected }) => {
      expect(isMasterBranch(branch)).toEqual(expected);
    });
  });

  describe('isSupport', function () {
    it.each`
      branch                         | expected
      ${'APIM-1234-mycustom-branch'} | ${false}
      ${'master'}                    | ${false}
      ${'1.2.3'}                     | ${false}
      ${'1.2.x'}                     | ${true}
      ${'1.x'}                       | ${false}
      ${'x'}                         | ${false}
    `('returns $expected is $branch is support', ({ branch, expected }) => {
      expect(isSupportBranch(branch)).toEqual(expected);
    });
  });

  describe('isSupportOrMaster', function () {
    it.each`
      branch                         | expected
      ${'APIM-1234-mycustom-branch'} | ${false}
      ${'master'}                    | ${true}
      ${'1.2.3'}                     | ${false}
      ${'1.2.x'}                     | ${true}
      ${'1.x'}                       | ${false}
      ${'x'}                         | ${false}
    `('returns $expected is $branch is support', ({ branch, expected }) => {
      expect(isSupportBranchOrMaster(branch)).toEqual(expected);
    });
  });
});
