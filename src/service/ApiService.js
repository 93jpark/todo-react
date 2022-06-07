import { API_BASE_URL } from "../api-config";

export function call(api, method, request) {
    const options = {
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        url: API_BASE_URL + api,
        method: method,
    };

    if(request) {
        // GET method
        options.body = JSON.stringify(request);
    }

    return fetch(options.url, options)
        .then((response)=> response.json().then((json => {
            if(!response.ok) {
                // response.ok가 true이면 정상적인 응답을 받은 것이고 아니면 에러 응답을 받은 것이다.
                return Promise.reject(json);
            }
            return json;
        })
        )
        .catch((json)=> {
            console.log(response.status);
            if(response.status === 403) {
                window.location.href = "/login"; // redirect
            }
            return Promise.reject(json);
        })
        )
        
    
}


export function signin(userDTO) {
    return call("/auth/signin", "POST", userDTO)
        .then((response)=>{
            if(response.token) {
                // 로컬 스토리지에 토큰 저장
                localStorage.setItem("ACCESS_TOKEN", response.token);
                // token이 존재하는 경우 Todo 화면으로 리다이렉트
                window.location.href="/";
            }
        })
    }

