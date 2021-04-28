package com.example.springtemplate.models;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="reactions")
public class Reaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String reply;
    private Integer userId;
    private Integer videoId;
    private Integer reactionId;

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getReply() {
        return reply;
    }
    public void setReply(String reply) {
        this.reply = reply;
    }
    public Integer getUserId() {
        return userId;
    }
    public void setUserId(Integer userId) {
        this.userId = userId;
    }
    public Integer getVideoId() {
        return videoId;
    }
    public void setVideoId(Integer videoId) {
        this.videoId = videoId;
    }
    public Integer getReactionId() {
        return reactionId;
    }
    public void setReactionId(Integer reactionId) {
        this.reactionId = reactionId;
    }

    public Reaction(Integer id, String reply, Integer userId, Integer reactionId) {
        this.id = id;
        this.reply = reply;
        this.userId = userId;
        this.reactionId = reactionId;
    }

    public Reaction() {}
}
