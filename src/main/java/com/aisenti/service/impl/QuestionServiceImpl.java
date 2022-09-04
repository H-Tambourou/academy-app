package com.aisenti.service.impl;

import java.util.Optional;

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

    @Override
    public void deleteQuestion(Question question) {
        questionRepository.delete(question);
    }

    @Override
    public Question getProjectById(Long id) {
        Optional<Question> question = questionRepository.findById(id);
        if (question.isPresent()) {
            return question.get();
        }
        return null;
    }

}
