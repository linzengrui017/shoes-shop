package com.lzr.controller;

import com.lzr.service.IMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by lzr on 2017/4/16.
 */
@Controller
public class MemberController {

    @Autowired
    @Qualifier("memberService")
    private IMemberService service;

    @RequestMapping("/login")
    public String login(@RequestParam String name){
        return service.login(name);
    }

}
