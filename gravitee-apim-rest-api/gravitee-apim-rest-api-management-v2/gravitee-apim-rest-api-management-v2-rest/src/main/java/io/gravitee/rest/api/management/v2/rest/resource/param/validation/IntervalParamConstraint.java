package io.gravitee.rest.api.management.v2.rest.resource.param.validation;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = IntervalParamValidator.class)
@Target({ ElementType.TYPE })
@Retention(RetentionPolicy.RUNTIME)
public @interface IntervalParamConstraint {
    String message() default "Invalid interval definition";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
