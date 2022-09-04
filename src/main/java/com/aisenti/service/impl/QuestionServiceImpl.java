package com.aisenti.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aisenti.model.Question;
import com.aisenti.repository.QuestionRepository;
import com.aisenti.service.QuestionService;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    @Override
    public Question createQuestion(Question question) {
        questionRepository.save(question);
        return question;
    }

}
