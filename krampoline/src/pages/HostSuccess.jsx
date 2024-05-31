import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function HostSuccess() {
  const [registerData, setRegisterData] = useState('')
  useEffect(() => {
    const data = localStorage.getItem('registerData')
    if (data) {
      setRegisterData(JSON.parse(data))
    }
  }, [])
  return (
    <section className="flex flex-col justify-center items-center p-6 w-full h-screen">
      <div className="text-center">
        <img
          src="https://raw.githubusercontent.com/workmeong-shimmeong/olleh-client/f72c0ba651a93a3d16a1856de8dcb06a72a9f4a8/krampoline/src/assets/i-host-success.svg"
          alt="프로그램 등록 완료!"
          className="mb-4 mx-auto w-[265px] h-[265px]"
        />
        <h1 className="text-xl font-bold mb-2">등록이 완료되었습니다!</h1>
        <p className="text-gray-600">메일로 등록 정보가 발송되었습니다.</p>
      </div>
      <Link
        to="/map"
        className="fixed bottom-[34px] font-semibold text-white text-[16px] rounded-[30px] w-[calc(100%-80px)] max-w-[350px] h-[50px] mx-[20px] bg-black leading-[50px] text-center"
      >
        홈으로
      </Link>
    </section>
  )
}
