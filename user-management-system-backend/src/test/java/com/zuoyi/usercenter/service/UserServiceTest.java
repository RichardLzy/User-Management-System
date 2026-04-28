package com.zuoyi.usercenter.service;

import com.zuoyi.usercenter.model.domain.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

/**
 * User Service Test
 */
@SpringBootTest
public class UserServiceTest {

    @Resource
    private UserService userService;

    /**
     * Test Add User
     */
    @Test
    public void testAddUser() {
        User user = new User();
        user.setUsername("usernameTest");
        user.setUserAccount("123");
        user.setAvatarUrl("https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/logo.png");
        user.setGender(0);
        user.setUserPassword("xxx");
        user.setPhone("123");
        user.setEmail("456");
        boolean result = userService.save(user);
        System.out.println(user.getId());
        Assertions.assertTrue(result);
    }

    /**
     * Test Update User
     */
    @Test
    public void testUpdateUser() {
        User user = new User();
        user.setId(1L);
        user.setUsername("usernameTest");
        user.setUserAccount("123");
        user.setAvatarUrl("https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/logo.png");
        user.setGender(0);
        user.setUserPassword("xxx");
        user.setPhone("123");
        user.setEmail("456");
        boolean result = userService.updateById(user);
        Assertions.assertTrue(result);
    }

    /**
     * Test Delete User
     */
    @Test
    public void testDeleteUser() {
        boolean result = userService.removeById(1L);
        Assertions.assertTrue(result);
    }

    /**
     * Test Get User
     */
    @Test
    public void testGetUser() {
        User user = userService.getById(1L);
        Assertions.assertNotNull(user);
    }

    /**
     * Test User Register
     */
    @Test
    void userRegister() {
        String userAccount = "useraccountTest";
        String userPassword = "";
        String checkPassword = "123456";
        long result = userService.userRegister(userAccount, userPassword, checkPassword);
        Assertions.assertEquals(-1, result);
        userAccount = "yu";
        result = userService.userRegister(userAccount, userPassword, checkPassword);
        Assertions.assertEquals(-1, result);
        userAccount = "useraccountTest";
        userPassword = "123456";
        result = userService.userRegister(userAccount, userPassword, checkPassword);
        Assertions.assertEquals(-1, result);
        userAccount = "yu pi";
        userPassword = "12345678";
        result = userService.userRegister(userAccount, userPassword, checkPassword);
        Assertions.assertEquals(-1, result);
        checkPassword = "123456789";
        result = userService.userRegister(userAccount, userPassword, checkPassword);
        Assertions.assertEquals(-1, result);
        userAccount = "usernameTest";
        checkPassword = "12345678";
        result = userService.userRegister(userAccount, userPassword, checkPassword);
        Assertions.assertEquals(-1, result);
        userAccount = "useraccountTest";
        result = userService.userRegister(userAccount, userPassword, checkPassword);
        Assertions.assertEquals(-1, result);
    }
}