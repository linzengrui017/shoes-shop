package com.lzr.controller;

import com.lzr.service.IMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by lzr on 2017/4/16.
 */
@Controller
public class MemberController {

    @Autowired
    @Qualifier("memberService")
    IMemberService service;

//    @RequestMapping("/showUsers")
//    public String showUsers(){
//        ArrayList list = service.queryUsers();
//        return null;
//    }

}
