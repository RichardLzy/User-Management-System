package com.zuoyi.usercenter.model.domain.request;

import lombok.Data;

import java.io.Serializable;

/**
 * User Register Request
 */
@Data
public class UserRegisterRequest implements Serializable {

    private static final long serialVersionUID = 3191241716373120793L;

    /**
     * User Account
     */
    private String userAccount;

    /**
     * User Password
     */
    private String userPassword;

    /**
     * Check Password
     */
    private String checkPassword;

}