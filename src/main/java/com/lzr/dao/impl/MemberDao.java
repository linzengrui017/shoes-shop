package com.lzr.dao.impl;

import com.lzr.dao.IMemberDao;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by lzr on 2017/4/16.
 */
@Repository("memberDao")
public class MemberDao implements IMemberDao{
    public List queryUsers() {
        return null;
    }
}
