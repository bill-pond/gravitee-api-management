package io.gravitee.rest.api.management.v2.rest.resource.param.validation;

import io.gravitee.rest.api.management.v2.rest.resource.param.IntervalParam;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class IntervalParamValidator implements ConstraintValidator<IntervalParamConstraint, IntervalParam> {

    @Override
    public void initialize(IntervalParamConstraint constraintAnnotation) {}

    @Override
    public boolean isValid(IntervalParam timestampParam, ConstraintValidatorContext context) {
        if (timestampParam == null) {
            return true;
        }

        Long from = timestampParam.getFrom();
        Long to = timestampParam.getTo();

        if (from != null && to != null && from > to) {
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate("Invalid date order, 'from' must be before 'to'").addConstraintViolation();
            return false;
        }

        return true;
    }
}
