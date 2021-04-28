package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Reaction;
import com.example.springtemplate.models.Video;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReactionRepository
        extends CrudRepository<Reaction, Integer> {
    @Query(value = "SELECT * FROM reactions",
            nativeQuery = true)
    public List<Reaction> findAllReactions();
    @Query(value = "SELECT * FROM reactions WHERE id=:reactionId",
            nativeQuery = true)
    public Reaction findReactionById(@Param("reactionId") Integer id);
    @Query(value = "SELECT * FROM reactions WHERE user_id=:userId", nativeQuery = true)
    public List<Reaction> findReactionsByUserId(@Param("userId") Integer id);
    @Query(value = "SELECT * FROM reactions WHERE video_id=:videoId", nativeQuery = true)
    public List<Reaction> findReactionsByVideoId(@Param("videoId") Integer id);
}
