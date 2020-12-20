import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { 
  chevronForwardOutline,
  archiveOutline, 
  archiveSharp, 
  trashOutline, 
  trashSharp, 
  warningOutline, 
  warningSharp,
  homeOutline,
  homeSharp,
  logInOutline,
  logInSharp,
  personAddOutline,
  personAddSharp,
  cartOutline,
  cartSharp,
  cardOutline,
  cardSharp,
  businessOutline,
  businessSharp
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/Inbox',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Login',
    url: '/page/Outbox',
    iosIcon: logInOutline,
    mdIcon: logInSharp
  },
  {
    title: 'Register',
    url: '/page/Favorites',
    iosIcon: personAddOutline,
    mdIcon: personAddSharp
  },
  {
    title: 'Product',
    url: '/page/Archived',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'MyCart',
    url: '/page/Trash',
    iosIcon: cartOutline,
    mdIcon: cartSharp
  },
  {
    title: 'Payment',
    url: '/page/Spam',
    iosIcon: cardOutline,
    mdIcon: cardSharp
  },
  {
    title: 'Contectus',
    url: '/page/Spam',
    iosIcon: businessOutline,
    mdIcon: businessSharp
  },
];

const labels = ['Sony', 'Samsung', 'Vivo', 'Appo', 'Nokia', 'Apple'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="end" icon={chevronForwardOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
