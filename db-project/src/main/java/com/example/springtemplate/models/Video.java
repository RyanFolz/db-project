package com.example.springtemplate.models;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="videos")
public class Video {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private Integer length;
    private Integer userId;

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public Integer getLength() {
        return length;
    }
    public void setLength(Integer length) {
        this.length = length;
    }
    public Integer getUserId() {
        return userId;
    }
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Video(Integer id, String title, Integer length, Integer userId) {
        this.id = id;
        this.title = title;
        this.length = length;
        this.userId = userId;
    }

    public Video() {}
}
