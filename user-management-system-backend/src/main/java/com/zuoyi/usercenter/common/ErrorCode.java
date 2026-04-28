package com.zuoyi.usercenter.common;

/**
 * Error Code
 */
public enum ErrorCode {

    SUCCESS(0, "ok", ""),
    PARAMS_ERROR(40000, "Bad Request", ""),
    NULL_ERROR(40001, "Request Data Null", ""),
    NOT_LOGIN(40100, "Not Login", ""),
    NO_AUTH(40101, "No Permission", ""),
    SYSTEM_ERROR(50000, "System Internal Error", "");

    private final int code;

    /**
     * Response Message
     */
    private final String message;

    /**
     * Response Description
     */
    private final String description;

    ErrorCode(int code, String message, String description) {
        this.code = code;
        this.message = message;
        this.description = description;
    }

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }

    public String getDescription() {
        return description;
    }
}