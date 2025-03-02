'use client';

import React, { useState } from 'react';
import MenuBar from '@/components/MenuBar/MenuBar';
import SettingsCardAccomodations from '@/components/SettingsCard/SettingsCardAccomodations';
import SettingsCardNotifications from '@/components/SettingsCard/SettingsCardNotifications';
import SettingsCardPerformanceInterest from '@/components/SettingsCard/SettingsCardPerformanceInterest';
import SettingsCardPersonalDetails from '@/components/SettingsCard/SettingsCardPersonalDetails';
import SettingsCardShowPreferences from '@/components/SettingsCard/SettingsCardShowPreferences';
import * as styles from './styles';
import SignOut from '@/public/images/signout.svg';
import { P } from "@/styles/text";


export default function SettingsPage() {
  const [menuExpanded, setMenuExpanded] = useState(false); // Track the expanded state of the menu

  return (
    <styles.All>
      <MenuBar setMenuExpanded={setMenuExpanded} />
      <styles.Page $menuExpanded={menuExpanded}>
        <styles.SettingDiv>
          <styles.ProfileName> Jane Doe </styles.ProfileName>
          <styles.Email> jane.doe@gmail.com </styles.Email>
          <styles.SignOutButton> 
            <styles.SignOut src={SignOut} alt="SignOut" />
            <styles.ButtonText> Sign Out </styles.ButtonText>
          </styles.SignOutButton>
          <SettingsCardPersonalDetails />
          <SettingsCardNotifications />
          <SettingsCardShowPreferences />
          <SettingsCardPerformanceInterest />
          <SettingsCardAccomodations />
        </styles.SettingDiv>
      </styles.Page>
    </styles.All>
  );
}
