'use client';

import React, { useEffect, useState } from 'react';
import { fetchVolunteerPreferences } from '@/api/supabase/queries/volunteers';
import MenuBar from '@/components/MenuBar/MenuBar';
import SettingsCardAccomodations from '@/components/SettingsCard/SettingsCardAccomodations';
import SettingsCardNotifications from '@/components/SettingsCard/SettingsCardNotifications';
import SettingsCardPerformanceInterest from '@/components/SettingsCard/SettingsCardPerformanceInterest';
import SettingsCardPersonalDetails from '@/components/SettingsCard/SettingsCardPersonalDetails';
import SettingsCardShowPreferences from '@/components/SettingsCard/SettingsCardShowPreferences';
import SignOut from '@/public/images/signout.svg';
import { useSession } from '@/utils/AuthProvider';
import * as styles from './styles';

export default function SettingsPage() {
  const [menuExpanded, setMenuExpanded] = useState(false); // Track the expanded state of the menu
  const { session } = useSession();
  const [userInfo, setUserInfo] = useState(null);

  //const user_info = fetchVolunteerPreferences(session.user.id);

  useEffect(() => {
    const getUserInfo = async () => {
      const fetchedUserInfo = await fetchVolunteerPreferences(session.user.id);
      setUserInfo(fetchedUserInfo);
    };

    getUserInfo();
  }, [session.user.id]);

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <styles.All>
      <MenuBar setMenuExpanded={setMenuExpanded} />
      <styles.Page $menuExpanded={menuExpanded}>
        <styles.SettingDiv>
          <styles.ProfileName>
            {' '}
            {userInfo.first_name} {userInfo.last_name}{' '}
          </styles.ProfileName>
          <styles.Email> {session.user.email} </styles.Email>
          <styles.SignOutButton>
            <styles.SignOut src={SignOut} alt="SignOut" />
            <styles.ButtonText> Sign Out </styles.ButtonText>
          </styles.SignOutButton>
          <SettingsCardPersonalDetails
            first_name={userInfo.first_name}
            last_name={userInfo.last_name}
            phone={userInfo.phone_number}
          />
          <SettingsCardNotifications />
          <SettingsCardShowPreferences />
          <SettingsCardPerformanceInterest />
          <SettingsCardAccomodations />
        </styles.SettingDiv>
      </styles.Page>
    </styles.All>
  );
}
