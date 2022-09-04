package com.aisenti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aisenti.model.Question;
import com.aisenti.service.QuestionService;

@RestController // combines @Controller and @ResponseBody
@RequestMapping("/api")
public class QuestionController {

    @Autowired
    QuestionService questionService;

    @PostMapping("/createNewQuestion")
    public ResponseEntity createNewQuestion(Question question) {
        if (question != null) {
            questionService.createQuestion(question);
            return ResponseEntity.status(HttpStatus.CREATED).body("success");
        } else {
            return null;
        }
    }

    @PostMapping("/deleteQuestion")
    public ResponseEntity deleteQuestion(Long id) {
        Question question = questionService.getProjectById(id);
        if (question != null) {
            questionService.deleteQuestion(question);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("deleted");
        } else {
            return null;
        }
    }

}
