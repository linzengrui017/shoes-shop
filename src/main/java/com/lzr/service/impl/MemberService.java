package com.lzr.service.impl;

import com.lzr.dao.MemberMapper;
import com.lzr.service.IMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.ArrayList;

/**
 * Created by lzr on 2017/4/16.
 */
@Service("memberService")
public class MemberService implements IMemberService{

    @Autowired
    private MemberMapper memberMapper;

    @Override
    public ArrayList queryUsers() {
        return null;
    }

    @Override
    public String login(String name) {
        if(StringUtils.isEmpty(memberMapper.selectByName(name))){
            return "index";
        }else {
            return "success";
        }

    }


}
