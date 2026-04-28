package com.zuoyi.usercenter.service;

import com.zuoyi.usercenter.model.domain.User;
import com.baomidou.mybatisplus.extension.service.IService;

import javax.servlet.http.HttpServletRequest;

/**
 * User Service
 */
public interface UserService extends IService<User> {

    /**
     * User Register
     *
     * @param userAccount   user account
     * @param userPassword  user password
     * @param checkPassword check password
     * @return new user id
     */
    long userRegister(String userAccount, String userPassword, String checkPassword);

    /**
     * User Login
     *
     * @param userAccount  user account
     * @param userPassword user password
     * @param request
     * @return safety user
     */
    User userLogin(String userAccount, String userPassword, HttpServletRequest request);

    /**
     * Get Safety User
     *
     * @param originUser
     * @return
     */
    User getSafetyUser(User originUser);

    /**
     * User Logout
     *
     * @param request
     * @return
     */
    int userLogout(HttpServletRequest request);
}