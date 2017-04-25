package com.lzr.dao;

import com.lzr.model.Member;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * Created by lzr on 2017/4/20.
 */
@Mapper
public interface MemberMapper {

    @Insert("INSERT INTO member (name, pwd, userType) VALUES (#{name}, #{pwd}, '1')")
    int save(Member member);

    @Select("SELECT * FROM member WHERE userId = #{userId}")
    Member selectById(int id);

    @Select("SELECT * FROM member WHERE name = #{name}")
    Member selectByName(String name);

    @Update("UPDATE member SET pwd = #{pwd} WHERE userId = #{userId}")
    int updateById(Member member);

    @Delete("DELETE FROM member WHERE userId = #{userId}")
    int deleteById(Member member);

    @Select("SELECT * FROM member")
    List<Member> queryAll();
}
