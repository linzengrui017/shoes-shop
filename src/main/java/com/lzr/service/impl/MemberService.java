package com.lzr.service.impl;

import com.lzr.dao.IMemberDao;
import com.lzr.service.IMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by lzr on 2017/4/16.
 */
@Service("memberService")
public class MemberService implements IMemberService{

    @Autowired
    @Qualifier("memberDao")
    IMemberDao dao;

    public ArrayList queryUsers() {
        return (ArrayList) dao.queryUsers();
    }
}
