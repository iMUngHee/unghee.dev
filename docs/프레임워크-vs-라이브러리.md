---
id: 3
title: '프레임워크 vs 라이브러리'
date: 'Sep 07 2022'
tags: ['OOP', 'IoC', 'Framework']
metaTags:
  [
    'framework',
    'Library',
    'inversion of control',
    '제어의 역전',
    '프레임워크',
    '라이브러리',
  ]
cover_image: 'https://unghee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fad6269a8-81d6-448f-8aca-2d83a6126342%2Fframework-vs-library.png?table=block&id=8b2482e8-542d-4b7c-9ab4-fb076487c972&spaceId=68b9dd4c-41bc-4b92-a347-519bc4002032&width=1220&userId=&cache=v2'
description: '키는 제어의 역전이다'
---

## ⭐️ 키워드: 프레임워크

![Untitled Diagram.drawio.png](https://unghee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F63dfd1be-97ea-4a66-bb0c-03ee1619d905%2FUntitled_Diagram.drawio.png?table=block&id=396beecd-0e10-4baf-8b38-72896ad75f15&spaceId=68b9dd4c-41bc-4b92-a347-519bc4002032&width=1060&userId=&cache=v2)

> **프레임워크는 코드를 호출한다. 코드는 라이브러리를 호출한다.**

> **프레임워크는 필요 없다. 중요한 것은 그림이지 프레임이 아니다.**

> **프레임워크와 결혼하지 말라!**

프레임워크는 어떠한 목적을 달성하기 위해 복잡한 문제를 해결하거나 서술하는 데 사용되는 기본 개념 구조며, 소프트웨어 개발에 있어 하나의 뼈대 역할을 한다.

작업을 처리할 때 프레임워크의 제약 조건인 **프레임워크 방식(Framework’s Way)** 을 사용하고 있다면 프레임워크라고 볼 수 있다.

이러한 제약 조건은 라이브러리가 부모 코드에 의해 호출될 함수들을 제공하는 반면 프레임워크는 애플리케이션 디자인 전반을 정의한다는 점에서 알 수 있다.

이는 프레임워크와 한번 결합하면 그 관계를 깨기가 매우 어렵다는 점을 시사한다.

전통적인 제어 흐름에 프레임워크가 **제어의 역전(Inversion of Control)** 을 가져오기 때문이다.

결국 사용자는 프레임워크의 빈 칸을 채우고만 있을 것이다.

그렇기 때문에 프레임워크는 때때로 프레임워크의 변경과 확장을 어렵게 할 수 있다.

## ✅ Inversion of Control: 프레임워크 vs 라이브러리

![framework-vs-library.png](https://unghee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fad6269a8-81d6-448f-8aca-2d83a6126342%2Fframework-vs-library.png?table=block&id=8b2482e8-542d-4b7c-9ab4-fb076487c972&spaceId=68b9dd4c-41bc-4b92-a347-519bc4002032&width=1220&userId=&cache=v2)

> **_Don’t call us, we will call you._ (Hollywood Principle)**

> **This inversion of control gives frameworks the power to serve as extensible skeletons.**

개발자가 작성한 객체나 메서드의 제어를 외부에 위임하는 설계 원칙을 제어의 역전이라고 한다.

제어의 역전은 다음과 같은 목적으로 사용된다.

- 작업의 실행과 구현을 분리하기 위해.
- 설계된 작업에 모듈을 집중하기 위해.
- 다른 시스템이 하는 일을 어떻게 하고 대신 계약에 의존하는지에 대한 가정에서 모듈을 분리시키기 위해.
- 모듈을 교체할 때 부수 효과를 방지하기 위해.

```ruby
puts 'What is your name?'
name = gets
process_name(name)
puts 'What is your name?'
quest = gets
process_quest(quest)
```

`Ruby` 로 작성된 위 코드는 사용자에 의해 통제된다.

이 상호 작용에서 질문을 할 때, 응답을 읽을 때, 그리고 그 결과를 처리할 때를 결정할 수 있다.

만약 다음과 같이 외부 코드에 의해 실행된다면 어떠한 차이가 있을까?

```ruby
require 'tk' # 윈도우 시스템 모듈
root = TkRoot.new()
name_label = TkLabel.new() {text "What is Your Name?"}
name_label.pack
name = TkEntry.new(root).pack
name.bind("FocusOut") {process_name(name)}
quest_label = TkLabel.new() {text "What is Your Quest?"}
quest_label.pack
quest = TkEntry.new(root).pack
quest.bind("FocusOut") {process_quest(quest)}
Tk.mainloop()
```

위 코드는 앞선 코드와 프로그램 간의 제어 흐름에서 큰 차이가 있다.

앞선 예제에서는 두 메서드가 호출될 때를 제어하지만, 위 예제에서는 제어를 윈도우 시스템에 `Tk.mainloop` 명령으로 넘겨주었다.

그리고 새로운 객체를 생성할 때 설정한 바딩인에 따라 메소드를 호출할 때를 결정한다. 이때 제어는 역전되어 있다.

우리는 이러한 외부 코드를 대게 프레임워크라고 부른다.

이것이 제어의 역전이며 **"우리에게 전화하지 마, 우리가 너에게 전화할게"** 라는 할리우드 원칙을 떠올리게 한다.

> 프레임워크의 한 가지 중요한 특징은 프레임워크를 맞춤화하기 위해 사용자가 정의한 메서드가 종종 사용자의 애플리케이션 코드가 아닌 프레임워크 자체에서 호출된다는 것이다. 프레임워크는 종종 애플리케이션 활동을 조정하고 시퀀싱하는 주요 프로그램의 역할을 한다. 이러한 제어의 역전은 프레임워크에 확장 가능한 골격 역할을 할 수 있는 힘을 준다. 사용자가 제공한 메서드들은 특정 애플리케이션에 대해 프레임워크에 정의된 일반 알고리즘을 조정한다.
>
> _[Ralph Johnson and Brian Foote](http://www.laputan.org/drc/drc.html)_

제어의 역전은 프레임워크를 라이브러리와 다르게 만드는 것의 핵심 부분이다.

라이브러리는 본질적으로 호출할 수 있는 함수 집합이지만 각 호출은 약간의 작업을 수행하며 사용자에게 제어를 반환한다.

이에 반해 프레임워크는 더 많은 행동이 내장된 추상적인 디자인을 구현한다.

이를 사용하려면 하위 클래스를 연결하거나 자체 클래스를 연결하는 등 프레임워크의 다양한 위치에 동작을 삽입해야 하며 프레임워크의 코드는 이 지점에서 코드를 호출한다.

제어의 역전을 구현하기 위한 많은 방법이 있으며, **콜백 패턴**, **스케쥴러**, **이벤트 루프**, **의존성 주입** 그리고 **템플릿 메서드** 등은 제어의 역전을 따라는 디자인 패턴이다.

## 🔎 참고 자료

[프레임워크 없는 프론트엔드 개발 - 교보문고](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791161754895&orderClick=LEa&Kc=)

[Inversion of control - Wikipedia](https://en.wikipedia.org/wiki/Inversion_of_control)

[Designing Reusable Classes](http://www.laputan.org/drc/drc.html)

[제어의 역전 (Inversion Of Control, IoC)](https://hudi.blog/inversion-of-control/)

[클린 아키텍처: 소프트웨어 구조와 설계의 원칙 - 교보문고](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788966262472&orderClick=LEa&Kc=)

[제어의 역전(Inversion of Control, IoC) 이란?](https://develogs.tistory.com/19)

[bliki: InversionOfControl](https://martinfowler.com/bliki/InversionOfControl.html)

[Clean Code(클린 코드) - 교보문고](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788966260959&orderClick=LAG&Kc=)

[Inversion of Control Containers and the Dependency Injection pattern](https://martinfowler.com/articles/injection.html)
