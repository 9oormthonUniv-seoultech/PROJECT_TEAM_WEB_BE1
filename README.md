# Pocket4Cut-BE1
---
### 🔍 브랜치 전략

- main :  언제든 배포가 가능한 상태이다. 
- develop : 다음 버전 기능이 담긴 코드로, 기능을 운영환경에 업데이트 할 때 main으로 merge한다. 
- feat/#n : 새로운 기능을 개발하기 위한 브랜치로, develop 브랜치에서 생성하고, 기능 개발이 완료되면 develop으로 merge한다.

  
### ⚠️ commit 컨벤션
[commit type]을 제외한 모든 커밋 내용에 한글 허용
```
[commit type]: [commit message] 
```

- commit type
  
    | 구분자 | 작업 유형 | 예 | 
    | --- | --- | --- |
    | feat | 새 기능 구현 | feat: 예치금 대량 충전 검색 기능 추가  |
    | fix | 버그 수정 | fix: 상점 목록의 에러처리 예외케이스 대응  |
    | docs | 문서(또는 주석) 관련 작업 | docs: 데코레이터 옵션에 대한 문서 추가  |
    | refactor | 리팩터링 | refactor: createStore의 함수를 작은 함수로 분리  |
    | test | 테스트 관련 작업 | test: 상점 생성 테스트 추가  |
    | chore | 기타 작업 | chore: 프로덕션 빌드시 소스맵 생성하도록 변경  |

- commit message
  
    이번 커밋에서 작업한 내용을 간결하게 설명합니다.

### ⚠️ PR 규칙

1. 목적
- 잘 작성한 PR 은 리뷰어로 하여금 코드 이해를 돕고 시간을 절약 할 수 있게 한다.
- PR을 요청한 개발자 역시 PR template을 작성하면서 한번 더 코드를 체크 할 수 있다.
  
2. 형식
- 제목
   - PR 목적을 한문장으로 요약하기 
- 내용
    ```
    ## 🚀 About
    
    > PR type (해당되는 것만 남기고 지워주세요)
      - feat : 새로운 기능 추가
      - fix : 코드 버그 수정
      - style : 코드 스타일 또는 포맷팅 변경 (가독성)
      - refactor : 코드 구조 변경 (기능 변화 없음)
      - docs : 문서화 작업
      - test : 테스트 코드 작성
      - build : 빌드 시스템, 배포 시스템, 의존성 관리
      - chore : 일상적인 유지보수, 환경 설정 변경, 패키지 업데이트
        
    > feat #관련이슈번호
    
    ## ✅ Key Changes
    
    - 주요 변경 사항 1
    - 주요 변경 사항 2
    - 주요 변경 사항 3
    
    ## 📍 Note
    
    > 주의 사항 또는 추가 설명
    

    ```
