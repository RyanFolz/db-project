package com.example.springtemplate.daos;

import com.example.springtemplate.models.Reaction;
import com.example.springtemplate.models.Video;
import com.example.springtemplate.repositories.ReactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ReactionOrmDao {
    @Autowired
    ReactionRepository reactionRepository;

    @PostMapping("/api/reactions")
    public Reaction createReaction(@RequestBody Reaction reaction) {
        return reactionRepository.save(reaction);
    }
    
    @GetMapping("/api/reactions")
    public List<Reaction> findAllReactions() {
        return reactionRepository.findAllReactions();
    }
    
    @GetMapping("/api/reactions/{reactionId}")
    public Reaction findReactionById(
            @PathVariable("reactionId") Integer id) {
        return reactionRepository.findReactionById(id);
    }

    @GetMapping("/api/reactions/by_user/{userId}")
    public List<Reaction> findReactionsByUserId(
            @PathVariable("userId") Integer id) {
        return reactionRepository.findReactionsByUserId(id);
    }

    @GetMapping("/api/reactions/by_video/{videoId}")
    public List<Reaction> findReactionsByVideoId(
            @PathVariable("videoId") Integer id) {
        return reactionRepository.findReactionsByVideoId(id);
    }
    
    @PutMapping("/api/reactions/{reactionId}")
    public Reaction updateReaction(
            @PathVariable("reactionId") Integer id,
            @RequestBody Reaction reactionUpdates) {
        Reaction reaction = reactionRepository.findReactionById(id);
        reaction.setReply(reactionUpdates.getReply());
        reaction.setUserId(reactionUpdates.getUserId());
        reaction.setVideoId(reactionUpdates.getVideoId());
        reaction.setReactionId(reactionUpdates.getReactionId());
        return reactionRepository.save(reaction);
    }
    
    @DeleteMapping("/api/reactions/{reactionId}")
    public void deleteReaction(
            @PathVariable("reactionId") Integer id) {
        reactionRepository.deleteById(id);
    }
}