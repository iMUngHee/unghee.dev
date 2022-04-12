---
id: 14
title: '왜 나는 너를 사랑하는가'
date: 'Apr 04 2022'
tags: ['test1', 'test2']
cover_image: '/image/posts/img1.jpg'
description: 'Description for Test'
---

## 💡 이론

1. #### 목적

   기본적인 스택 기능을 가지며 모든 원소들이 오름차순(혹은 내림차순)을 유지하도록 한다.

2. #### 과정

3. #### 코드

```cpp
#include <iostream>
#include <stack>

using namespace std;

stack<int> mono_stack;

int arr[6] = { 2, 7, 6, 3, 5, 9 };

int main() {
    for(int i = 0; i < 6; i++) {
        while(!mono_stack.empty() && mono_stack.top() > arr[i]){
          mono_stack.pop();
        }
        mono_stack.push(arr[i]);
    }
    while(!mono_stack.empty()){
      cout << mono_stack.top() << ' ';
      mono_stack.pop();
    }
    cout << '\n';
    return 0;
}
```

```javascript
function abc() {
  console.log(abc);
}
const abc = () => {
  return abc;
};
```

```html
<div></div>
<head> </head>
<img src="alsdkfjalsdkjf" alt="dajslkfjasld" />
```

```swift
var abc: String = "abcbacb";
func asdf() -> Int {
  print(asbc)
}
```

```css
.body {
  background: white;
}

body {
  background: #000000;
}
```

4. #### 결과
   ![Result](https://images.velog.io/images/ung7497/post/13ada08e-2981-4fe2-a8dc-c1488f00e253/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202021-12-20%20%EC%98%A4%ED%9B%84%2010.59.09.png)

<br>
<br>
<br>
<br>

> Ref.
> [Special Data Structure: Monotonic Stack](https://labuladong.gitbook.io/algo-en/ii.-data-structure/monotonicstack)

> [monotone stack](https://justicehui.github.io/medium-algorithm/2019/01/01/monotoneStack/)

> [Algorithms for Interview 2: Monotonic Stack](https://medium.com/techtofreedom/algorithms-for-interview-2-monotonic-stack-462251689da8)