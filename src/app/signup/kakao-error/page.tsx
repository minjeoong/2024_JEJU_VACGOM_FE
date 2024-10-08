'use client';

import * as React from 'react';
import { SignupDoneWrap } from './style';
import BackHeader from '@/app/_component/molecule/BackHeader';
import BottomButton from '@/app/_component/atom/BottomButton';
import { useRouter } from 'next/navigation';
import DonePage from '@/app/_component/temp/DonePage';
import { PATH } from '@/routes/path';
import { useBridge } from '@/bridge/hook/useBridge';
import ParentsVerify from '@/store/signup/ParentsVerify';

export default function KakaoErrorPage(): React.JSX.Element {
  const router = useRouter();
  const { goBack } = useBridge();

  return (
    <SignupDoneWrap>
      <BackHeader onClickHandler={goBack} />
      <div className="padding">
        <DonePage
          title={'인증에 실패했어요'}
          content_top={'올바른 정보를 입력했는지 확인하고,'}
          content_bottom={'다시 시도해 주세요.'}
          src_success={false}
        />
      </div>
      <BottomButton
        label={'다시 인증하기'}
        filled={true}
        handleNextButtonClick={() => {
          router.push(PATH.SIGNUP_INFO);
        }}
      />
    </SignupDoneWrap>
  );
}
