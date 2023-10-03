package io.gravitee.rest.api.management.v2.rest.resource.param;

import io.gravitee.rest.api.management.v2.rest.resource.param.validation.IntervalParamConstraint;
import jakarta.validation.constraints.Min;
import jakarta.ws.rs.QueryParam;
import lombok.Data;

@Data
@IntervalParamConstraint
public class IntervalParam {

    public static final String FROM_QUERY_PARAM_NAME = "from";
    public static final String TO_QUERY_PARAM_NAME = "to";

    @QueryParam(FROM_QUERY_PARAM_NAME)
    @Min(0)
    Long from;

    @QueryParam(TO_QUERY_PARAM_NAME)
    @Min(0)
    Long to;
}
