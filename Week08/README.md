学习笔记
1. 有限状态机理论
   -在每一个机器里， 我们都可以做计算， 存储， 输出
   -所有机器接受的输入是一致的
   -状态机本身没有状态

   Moore - 每个机器都有确定的下一个状态
   Mealy - 每个状态机根据输入决定下一个状态 （这个是我们要用的)

2. 对比使用和不使用状态机处理字符串
   如何寻在字符串中寻找连续的子字符串？
   例1. 在字符串中寻找"ab"
   ```
    function match(words){
        let found_a = false;
        for (let w of words){
            if (w === 'a'){
                found_a = true;
            } else if (w === 'b'){
                if (found_a)
                    return true;
                else
                    found_a = false;
            } else {
                found_a = false;
            }
        }
        return false;
    }
    ```
    使用状态机
    例2. 在字符串中寻找"abcabx"
    ```
    function match(string){
        let state = start;
        for (let s in string){
            state = state(s);     
        }
        return state===end;
    }

    function start(s){
        if (s==='a')
            return foundA1;
        else
            return start(s);
    }

    function foundA1(s){
        if (s==='b')
            return foundB1;
        else
            return start(s);
    }

    function foundB1(s){
        if (s==='c')
            return foundC;
        else
            return start(s);
    }

    function foundC(s){
        if (s==='a')
            return foundB2;
        else
            return start(s);
    }

    function foundB2(s){
        if (s==='b')
            return foundX;
        else
            return start(s);
    }

    function foundX(s){
        if (s==='x')
            return end;
        else
        return foundB1(s);
    }

    function end(s){
        return end;
    }
    
    ```

3. 实战-使用状态机解析HTTP request 和 HTTP response
- 搭建服务器和客户端（require(net))
- 解析request
- 解析response, 可以根据Content-Type选择不同的RequestBodyParser