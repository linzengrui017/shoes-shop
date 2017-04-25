package com.lzr.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by lzr on 2017/4/16.
 */
@Controller
public class IndexController {
    @RequestMapping("/index")
    public String index(){
        return "showUsers";
    }

    @RequestMapping("/")
    public ModelAndView page(){
        return new ModelAndView("index");
    }

    @RequestMapping("/success")
    public ModelAndView success(){
        return new ModelAndView("success");
    }

}
