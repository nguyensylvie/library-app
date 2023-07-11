package com.app.library.dataloader;

import com.app.library.model.Document;
import com.app.library.model.DocumentType;
import com.app.library.model.Member;
import com.app.library.repository.DocumentRepository;
import com.app.library.repository.MemberRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.Year;

@Component
public class DataLoader {
    private final DocumentRepository documentRepository;
    private final MemberRepository memberRepository;

    public DataLoader(DocumentRepository documentRepository, MemberRepository memberRepository) {
        this.documentRepository = documentRepository;
        this.memberRepository = memberRepository;
    }

    @PostConstruct
    public void init() {
        Document document1 = new Document(null, "Harry Potter à l'école des sorciers", "J.K. Rowling", Year.of(2017), true, LocalDate.now(), DocumentType.valueOf("BOOK"));
        documentRepository.save(document1);

        Document document2 = new Document(null, "L'Etranger", "Albert Camus", Year.of(1942), true, LocalDate.now(), DocumentType.valueOf("BOOK"));
        documentRepository.save(document2);

        Member member1 = new Member(null, "Marie", "Dubois", LocalDate.now());
        memberRepository.save(member1);

        Member member2 = new Member(null, "Emma", "Lacroix", LocalDate.now());
        memberRepository.save(member2);
    }
}
