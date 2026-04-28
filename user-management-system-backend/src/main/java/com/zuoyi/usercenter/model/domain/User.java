package com.zuoyi.usercenter.model.domain;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * User Entity
 */
@TableName(value = "user")
@Data
public class User implements Serializable {
    /**
     * id
     */
    @TableId(type = IdType.AUTO)
    private Long id;

    /**
     * User Nickname
     */
    private String username;

    /**
     * User Account
     */
    private String userAccount;

    /**
     * Avatar
     */
    private String avatarUrl;

    /**
     * Gender
     */
    private Integer gender;

    /**
     * Password
     */
    private String userPassword;

    /**
     * Phone
     */
    private String phone;

    /**
     * Email
     */
    private String email;

    /**
     * Status 0 - Normal
     */
    private Integer userStatus;

    /**
     * Create Time
     */
    private Date createTime;

    /**
     * Update Time
     */
    private Date updateTime;

    /**
     * Is Deleted
     */
    @TableLogic
    private Integer isDelete;

    /**
     * User Role 0 - User 1 - Admin
     */
    private Integer userRole;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}