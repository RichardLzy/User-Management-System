package com.zuoyi.usercenter.common;

import lombok.Data;

import java.io.Serializable;

/**
 * General Response Class
 */
@Data
public class BaseResponse<T> implements Serializable {

    /**
     * Response Code
     */
    private int code;

    /**
     * Response Data
     */
    private T data;

    /**
     * Response Message
     */
    private String message;

    /**
     * Response Description
     */
    private String description;

    public BaseResponse(int code, T data, String message, String description) {
        this.code = code;
        this.data = data;
        this.message = message;
        this.description = description;
    }

    public BaseResponse(int code, T data, String message) {
        this(code, data, message, "");
    }

    public BaseResponse(int code, T data) {
        this(code, data, "", "");
    }

    public BaseResponse(ErrorCode errorCode) {
        this(errorCode.getCode(), null, errorCode.getMessage(), errorCode.getDescription());
    }
}