Fix the email address extension length bug

* Modify the code
* Build with `mvn clean install -T 2C`
* `cd gravitee-apim-rest-api/gravitee-apim-rest-api-service/target`
* Unpack `jar xf gravitee-apim-rest-api-service-4.1.0.jar`
* Create a working dir `mkdir ~/fix_email && cd ~/fix_email`
* Copy `gravitee-apim-rest-api-service-4.1.0.jar` from `/opt/graviteeio/apim/graviteeio-apim-rest-api-4.1.0/lib` into the working directory.
* Unpack `jar xf gravitee-apim-rest-api-service-4.1.0.jar`
* `cp ~/gravitee-api-management/gravitee-apim-rest-api/gravitee-apim-rest-api-service/target/io/gravitee/rest/api/service/EmailValidator.class ./io/gravitee/rest/api/service/EmailValidator.class`
* Update the jar file `jar uf gravitee-apim-rest-api-service-4.1.0.jar io/gravitee/rest/api/service/EmailValidator.class`
* Copy the updated jar back `sudo cp /home/ec2-user/fix_email/gravitee-apim-rest-api-service-4.1.0.jar /opt/graviteeio/apim/graviteeio-apim-rest-api-4.1.0/lib`
* Restart rest api `sudo systemctl restart graviteeio-apim-rest-api`
