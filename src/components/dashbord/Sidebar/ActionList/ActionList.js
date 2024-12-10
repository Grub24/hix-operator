import React, { useState } from 'react'
import styles from './ActionList.module.css';
import { AcionListParent, TabDashbord } from '../../../../global/globalComponents/globalMuiComponent/globalMuiComponents'
import { NavLink } from 'react-router-dom';
import dashbordSvg from '../../../../images/svg/Home.svg';
import reportsSvg from '../../../../images/svg/diagram.svg';
import productsSvg from '../../../../images/svg/Folder@2x.svg';
import commandsSvg from '../../../../images/svg/volume-1 1.svg';
import settingSvg from '../../../../images/svg/Setting.svg';
import profileSvg from '../../../../images/svg/profile.svg';
import HixIcon from '../../../../global/globalComponents/globalMuiComponent/HixIcon/HixIcon';

const ActionList = () => {

  const [chatActions,setShowChatActions] = useState(false)

  return (
    <AcionListParent className={`${styles.actionList} actionList`}>
      <TabDashbord>
        <NavLink className={`dFlex algCenter`} to='/dashbord/home'
        >داشبورد
        <HixIcon className={'ml1vw'} svgCode={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M20.339 7.65948C21.009 8.17848 21.42 8.94948 21.49 9.78848L21.5 9.98948V18.0985C21.5 20.1885 19.849 21.8885 17.78 21.9985H15.79C14.839 21.9795 14.07 21.2395 14 20.3095L13.99 20.1685V17.3095C13.99 16.9985 13.759 16.7395 13.45 16.6885L13.36 16.6785H10.689C10.37 16.6885 10.11 16.9185 10.07 17.2185L10.06 17.3095V20.1595C10.06 20.2185 10.049 20.2885 10.04 20.3385L10.03 20.3595L10.019 20.4285C9.9 21.2795 9.2 21.9285 8.33 21.9895L8.2 21.9985H6.41C4.32 21.9985 2.61 20.3595 2.5 18.2985V9.98948C2.509 9.13848 2.88 8.34848 3.5 7.79848L9.73 2.78848C11 1.77948 12.78 1.73948 14.089 2.66848L14.25 2.78848L20.339 7.65948ZM20.099 18.2585L20.11 18.0985V9.99848C20.099 9.56948 19.92 9.16848 19.61 8.86948L19.48 8.75848L13.38 3.87848C12.62 3.26848 11.54 3.23948 10.74 3.76848L10.589 3.87848L4.509 8.77948C4.16 9.03848 3.95 9.42848 3.9 9.83848L3.889 9.99848V18.0985C3.889 19.4285 4.929 20.5185 6.25 20.5985H8.2C8.42 20.5985 8.61 20.4495 8.639 20.2395L8.66 20.0595L8.67 20.0085V17.3095C8.67 16.2395 9.49 15.3695 10.54 15.2885H13.36C14.429 15.2885 15.299 16.1095 15.38 17.1595V20.1685C15.38 20.3785 15.53 20.5595 15.73 20.5985H17.589C18.929 20.5985 20.019 19.5695 20.099 18.2585Z" fill="#BDBDBD"/>
          </svg>
          } />
        </NavLink>
      </TabDashbord>

      <TabDashbord>
        <NavLink className={`dFlex algCenter`} to='/dashbord/reports'>گزارشات
        <HixIcon className={'ml1vw'} svgCode={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Iconly/Light-outline/Category">
            <g id="edit-2">
            <g id="vuesax/bold/diagram">
            <g id="vuesax/bold/diagram_2">
            <g id="diagram">
            <path id="Vector" d="M22 22.75H5C2.93 22.75 1.25 21.07 1.25 19V2C1.25 1.59 1.59 1.25 2 1.25C2.41 1.25 2.75 1.59 2.75 2V19C2.75 20.24 3.76 21.25 5 21.25H22C22.41 21.25 22.75 21.59 22.75 22C22.75 22.41 22.41 22.75 22 22.75Z" fill="#BDBDBD"/>
            <path id="Vector_2" d="M4.99982 17.7498C4.82982 17.7498 4.64982 17.6898 4.50982 17.5698C4.19982 17.2998 4.15982 16.8298 4.42982 16.5098L9.01982 11.1498C9.51982 10.5698 10.2398 10.2198 10.9998 10.1898C11.7598 10.1698 12.5098 10.4498 13.0498 10.9898L13.9998 11.9398C14.2498 12.1898 14.5698 12.3098 14.9298 12.3098C15.2798 12.2998 15.5998 12.1398 15.8298 11.8698L20.4198 6.50982C20.6898 6.19982 21.1598 6.15982 21.4798 6.42982C21.7898 6.69982 21.8298 7.16982 21.5598 7.48982L16.9698 12.8498C16.4698 13.4298 15.7498 13.7798 14.9898 13.8098C14.2198 13.8298 13.4798 13.5498 12.9398 13.0098L11.9998 12.0598C11.7498 11.8098 11.4198 11.6798 11.0698 11.6898C10.7198 11.6998 10.3998 11.8598 10.1698 12.1298L5.57982 17.4898C5.41982 17.6598 5.20982 17.7498 4.99982 17.7498Z" fill="#BDBDBD"/>
            </g>
            </g>
            </g>
            </g>
            </g>
          </svg>

          } />
        </NavLink>

      </TabDashbord>

      <TabDashbord>
        <NavLink className={`dFlex algCenter`} to='/dashbord/chat'>چت با کاربران
        <HixIcon className={'ml1vw'} svgCode={
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"/>
        </svg>        

          } />
        </NavLink>

      </TabDashbord>

      <TabDashbord className={`${styles.dropDown} ${chatActions&&styles.active}`}>
        <a onClick={() => setShowChatActions(!chatActions)} className={`w100 dFlex algCenter fn14`}>
          <span className={styles.chevron}>
            {
              chatActions?
              <svg   aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 10 4 4 4-4"/>
            </svg>
              :
              <svg   aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14 8-4 4 4 4"/>
            </svg>

            }

          </span>
          <span className={styles.text}>تنظیمات مکالمه</span>
        <HixIcon className={'ml1vw'} svgCode={
          <svg   aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"/>
        </svg>        

          } />
        </a>
        {
          chatActions&&
        <div className={styles.actionsChat}>

          <div className={styles.item}>
            <NavLink className={`dFlex algCenter`} to='/dashbord/managmentOperator'>
            <span className={styles.textLink}>مدیریت اپراتور</span>
            <HixIcon className={'ml1vw'} svgCode={
          <svg   aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"/>
        </svg>        

          } />
            </NavLink>
          </div>

          <div className={styles.item}>
            <NavLink className={`dFlex algCenter`} to='/dashbord/reportsChat'>
            <span className={styles.textLink}>آمار مکالمات</span>
            <HixIcon className={'ml1vw'} svgCode={
            <svg   aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"/>
            </svg>        

              } />
            </NavLink>
          </div>

          <div className={styles.item}>
            <NavLink className={`dFlex algCenter`} to='/dashbord/msgReady'>
            <span className={styles.textLink}>پیام اماده</span>
            <HixIcon className={'ml1vw'} svgCode={
            <svg   aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"/>
            </svg>        

              } />
            </NavLink>
          </div>

        </div>
        }

      </TabDashbord>

      <TabDashbord>
        <NavLink className={`dFlex algCenter`} to='/dashbord/products'>محصولات
        <HixIcon className={'ml1vw'} svgCode={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z" stroke="#BDBDBD" strokeWidth="1.5" strokeMiterlimit="10"/>
          <path d="M8 2H17C19 2 20 3 20 5V6.38" stroke="#BDBDBD" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          } />
        </NavLink>

      </TabDashbord>

      <TabDashbord>
        <NavLink className={`dFlex algCenter`} to='/dashbord/commands'>دستورات
        <HixIcon className={'ml1vw'} svgCode={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_152_1867)">
          <path d="M18.7578 9.99977H5.25315C3.887 9.99977 2.7793 8.78978 2.7793 7.31978V4.68977C2.7793 3.20977 3.89623 2.00977 5.25315 2.00977H18.7578C20.1239 2.00977 21.2316 3.21977 21.2316 4.68977V7.31978C21.2316 8.78978 20.1147 9.99977 18.7578 9.99977Z" stroke="#BDBDBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.7578 21.9998H5.25315C3.887 21.9998 2.7793 20.7898 2.7793 19.3198V16.6898C2.7793 15.2098 3.89623 14.0098 5.25315 14.0098H18.7578C20.1239 14.0098 21.2316 15.2198 21.2316 16.6898V19.3198C21.2316 20.7898 20.1147 21.9998 18.7578 21.9998Z" stroke="#BDBDBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.46289 5V7" stroke="#BDBDBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.1543 5V7" stroke="#BDBDBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.46289 17V19" stroke="#BDBDBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.1543 17V19" stroke="#BDBDBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.8477 6H17.54" stroke="#BDBDBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.8477 18H17.54" stroke="#BDBDBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_152_1867">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
          </svg>

          } />
        </NavLink>

      </TabDashbord>

      <TabDashbord>
        <NavLink className={`dFlex algCenter`} to='/dashbord/profile'>پروفایل
        <HixIcon className={'ml1vw'} svgCode={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Iconly/Light-outline/Setting">
          <g id="edit-2">
          <g id="vuesax/linear/user">
          <g id="vuesax/linear/user_2">
          <g id="user">
          <path id="Vector" d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#BDBDBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path id="Vector_2" d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22" stroke="#BDBDBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          </g>
          </g>
          </g>
          </g>
          </svg>

          } />
        </NavLink>

      </TabDashbord>

      <TabDashbord>
        <NavLink className={`dFlex algCenter`} to='/dashbord/settings'>تنظیمات
        <HixIcon className={'ml1vw'} svgCode={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.6161 2H11.3811C10.6855 2 10.0186 2.27155 9.52796 2.75457C9.09307 3.1827 8.82704 3.74716 8.77575 4.34781L8.76724 4.54181C8.75775 5.17352 8.24742 5.66634 7.62101 5.66628C7.47895 5.6648 7.33141 5.63238 7.19559 5.5713L7.06235 5.50171C5.83155 4.81017 4.23128 5.23376 3.50918 6.46166L2.85989 7.50695C2.16949 8.68048 2.51001 10.1548 3.62449 10.9141L3.77948 11.0115C4.16149 11.2284 4.37987 11.599 4.37987 12C4.37987 12.3688 4.19491 12.7137 3.88645 12.9228L3.78115 12.9875C2.62651 13.6412 2.17157 15.0841 2.75197 16.2844L2.83679 16.4442L3.47412 17.5224C3.80539 18.1083 4.37306 18.5497 5.04445 18.7366C5.63953 18.9023 6.2746 18.8565 6.83762 18.6084L7.01565 18.5213C7.31529 18.3516 7.62484 18.3109 7.91538 18.3871C8.20591 18.4633 8.45336 18.65 8.6027 18.9057C8.68504 19.0418 8.73337 19.1822 8.75063 19.3277L8.75912 19.4753C8.75765 20.8493 9.93219 22 11.3811 22H12.6164C13.9845 22 15.12 20.9703 15.231 19.6414L15.2391 19.4698C15.2383 19.1379 15.3582 18.8524 15.5727 18.6422C15.7872 18.432 16.0786 18.3146 16.382 18.316C16.5214 18.3199 16.6746 18.3541 16.8166 18.4163L16.9527 18.485C18.1011 19.1344 19.6058 18.8008 20.3808 17.7089L20.4803 17.557L21.1399 16.4804C21.495 15.8833 21.5912 15.1817 21.4119 14.523C21.253 13.9391 20.8887 13.4297 20.3843 13.0841L20.2174 12.9793C19.9272 12.8149 19.736 12.5708 19.658 12.2844C19.58 11.998 19.6218 11.6929 19.7742 11.4368C19.8585 11.2926 19.9706 11.1726 20.1051 11.0807L20.3624 10.9223C21.4043 10.2293 21.7945 8.86519 21.2461 7.71842L21.1892 7.60674C21.1769 7.57762 21.1627 7.54922 21.1465 7.52174L20.5333 6.47928C19.8511 5.31918 18.3759 4.86897 17.146 5.4355L16.9821 5.51839C16.6882 5.68688 16.3779 5.72947 16.0857 5.65514C15.7935 5.58081 15.5435 5.39567 15.3908 5.14054C15.3124 5.01116 15.2641 4.87079 15.2468 4.72535L15.2383 4.57766C15.2599 3.94968 14.9925 3.27681 14.4983 2.77871C14.0041 2.28061 13.3251 1.99971 12.6161 2ZM11.3811 3.44774H12.6164C12.9264 3.44761 13.2229 3.57029 13.4387 3.78783C13.6546 4.00537 13.7713 4.29923 13.7624 4.60249L13.7756 4.85454C13.8203 5.23984 13.9357 5.57504 14.1181 5.87616C14.4673 6.45965 15.0423 6.88546 15.7143 7.05641C16.3863 7.22736 17.1001 7.12941 17.6983 6.78415L17.8015 6.73265L17.9125 6.6891C18.4009 6.52853 18.9764 6.73175 19.253 7.20208L19.8378 8.19726L19.8505 8.22529L19.9212 8.35884C20.1578 8.85504 19.9601 9.4827 19.448 9.77613L19.2873 9.87532C18.9464 10.1073 18.6849 10.3872 18.4946 10.7126C18.1471 11.2971 18.0509 11.9987 18.2302 12.6574C18.3932 13.2563 18.7716 13.7748 19.2922 14.1195L19.5645 14.2882C19.7566 14.4207 19.915 14.6422 19.9841 14.896C20.0621 15.1824 20.0203 15.4875 19.868 15.7436L19.2236 16.7957L19.1511 16.9067C18.8529 17.3258 18.2647 17.4814 17.7687 17.2682L17.4528 17.11C17.1004 16.9547 16.7556 16.8778 16.4053 16.8686C15.6914 16.865 15.0212 17.1351 14.5279 17.6185C14.0345 18.1019 13.7588 18.7585 13.7621 19.4421L13.7565 19.5511C13.7099 20.1023 13.2137 20.5523 12.6164 20.5523H11.3811C10.7905 20.5523 10.3043 20.1145 10.2421 19.552L10.2219 19.1985C10.1772 18.8132 10.0618 18.478 9.87937 18.1768C9.54028 17.5959 8.96861 17.1645 8.29737 16.9886C7.62614 16.8126 6.91096 16.9066 6.3108 17.2497L6.20208 17.3018C5.98569 17.3964 5.70831 17.4164 5.44842 17.344C5.1552 17.2624 4.90728 17.0696 4.75952 16.8084L4.13027 15.7449L4.07398 15.6383C3.83562 15.144 4.03354 14.5163 4.54639 14.2256L4.70219 14.1296C5.43413 13.634 5.85754 12.8446 5.85754 12C5.85754 11.1429 5.42197 10.3467 4.70395 9.871L4.44324 9.70925C3.98256 9.39466 3.83377 8.75044 4.13128 8.24455L4.78057 7.19925C5.1049 6.64815 5.8038 6.46315 6.3519 6.77085L6.54427 6.87026C6.90355 7.03293 7.25588 7.11034 7.61326 7.11398C8.99969 7.11416 10.1334 6.07087 10.2368 4.7415L10.2503 4.43661C10.2706 4.20741 10.3863 3.96196 10.5753 3.77582C10.7887 3.56581 11.0786 3.44774 11.3811 3.44774ZM12.0032 8.73182C10.161 8.73182 8.66748 10.195 8.66748 12C8.66748 13.805 10.161 15.2682 12.0032 15.2682C13.8455 15.2682 15.339 13.805 15.339 12C15.339 10.195 13.8455 8.73182 12.0032 8.73182ZM12.0032 10.1796C13.0294 10.1796 13.8613 10.9946 13.8613 12C13.8613 13.0054 13.0294 13.8204 12.0032 13.8204C10.977 13.8204 10.1452 13.0054 10.1452 12C10.1452 10.9946 10.977 10.1796 12.0032 10.1796Z" fill="#AEAEB2"/>
          </svg>


          } />
        </NavLink>

      </TabDashbord>
    </AcionListParent>
  )
}

export default ActionList