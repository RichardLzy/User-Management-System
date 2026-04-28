package com.zuoyi.usercenter.model.domain.request;

import lombok.Data;

import java.io.Serializable;

/**
 * User Login Request
 */
@Data
public class UserLoginRequest implements Serializable {

    private static final long serialVersionUID = 3191241716373120793L;

    /**
     * User Account
     */
    private String userAccount;

    /**
     * User Password
     */
    private String userPassword;
}