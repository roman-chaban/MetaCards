import type { FC } from 'react';
import styles from './HeroTrust.module.scss';
import { Star } from 'grommet-icons';

export const HeroTrust: FC = () => {
  return (
    <div className={styles.heroTrust}>
      <div className={styles.heroTrust__title}>
        <svg
          width="99"
          height="26"
          viewBox="0 0 99 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.8846 9.43555H35.8476V11.2903H31.9248V21.7458H29.7746V11.2903H25.8682L25.8846 9.43555ZM35.4209 12.8332H37.2592V14.5566H37.292C37.3577 14.3104 37.4726 14.0806 37.6367 13.8508C37.8009 13.621 37.9978 13.4076 38.244 13.2271C38.4738 13.0301 38.7364 12.8824 39.0319 12.7675C39.3109 12.6526 39.6064 12.587 39.9018 12.587C40.1316 12.587 40.2957 12.6034 40.3778 12.6034C40.4599 12.6198 40.5583 12.6362 40.6404 12.6362V14.5238C40.5091 14.4909 40.3614 14.4745 40.2137 14.4581C40.0659 14.4417 39.9346 14.4253 39.7869 14.4253C39.4586 14.4253 39.1468 14.4909 38.8513 14.6222C38.5559 14.7536 38.3097 14.9505 38.0799 15.1967C37.8665 15.4593 37.686 15.7712 37.5547 16.1487C37.4233 16.5262 37.3577 16.9694 37.3577 17.4618V21.6965H35.3881L35.4209 12.8332ZM49.6679 21.7458H47.7311V20.4983H47.6983C47.4521 20.9579 47.091 21.3026 46.615 21.5816C46.139 21.8607 45.6466 21.992 45.1542 21.992C43.9888 21.992 43.1353 21.7129 42.6101 21.122C42.0848 20.5476 41.8222 19.6612 41.8222 18.4959V12.8332H43.7918V18.2989C43.7918 19.0868 43.9396 19.6448 44.2514 19.9567C44.5469 20.2849 44.9736 20.4491 45.5153 20.4491C45.9256 20.4491 46.2703 20.3834 46.5493 20.2521C46.8283 20.1208 47.0581 19.9567 47.2223 19.7433C47.4028 19.5299 47.5177 19.2673 47.5998 18.9719C47.6819 18.6764 47.7147 18.3481 47.7147 18.0035V12.8332H49.6843V21.7458H49.6679ZM53.0163 18.8898C53.0819 19.4643 53.2953 19.8582 53.6728 20.1044C54.0503 20.3342 54.5099 20.4491 55.0352 20.4491C55.2157 20.4491 55.4291 20.4327 55.6589 20.3998C55.8887 20.367 56.1185 20.3178 56.3154 20.2357C56.5288 20.1536 56.6929 20.0387 56.8242 19.8746C56.9556 19.7105 57.0212 19.5135 57.0048 19.2673C56.9884 19.0211 56.9063 18.8077 56.7258 18.6436C56.5452 18.4794 56.3318 18.3646 56.0692 18.2497C55.8066 18.1512 55.4947 18.0691 55.15 18.0035C54.8054 17.9378 54.4607 17.8557 54.0996 17.7737C53.7385 17.6916 53.3774 17.5931 53.0327 17.4782C52.688 17.3633 52.3926 17.2156 52.1135 17.0022C51.8509 16.8053 51.6211 16.5591 51.4734 16.2472C51.3093 15.9353 51.2272 15.5742 51.2272 15.1147C51.2272 14.6222 51.3421 14.2283 51.5883 13.9C51.8181 13.5718 52.1299 13.3092 52.491 13.1122C52.8521 12.9152 53.2625 12.7675 53.7057 12.6854C54.1488 12.6034 54.5756 12.5705 54.9695 12.5705C55.4291 12.5705 55.8723 12.6198 56.2826 12.7183C56.6929 12.8168 57.0869 12.9645 57.4151 13.1943C57.7598 13.4076 58.0388 13.7031 58.2522 14.0478C58.482 14.3925 58.6133 14.8192 58.679 15.3116H56.6273C56.5288 14.8356 56.3154 14.5238 55.9871 14.3596C55.6425 14.1955 55.2649 14.1134 54.8218 14.1134C54.6905 14.1134 54.5099 14.1298 54.3294 14.1463C54.1324 14.1791 53.9683 14.2119 53.7877 14.2776C53.6236 14.3432 53.4759 14.4417 53.361 14.5566C53.2461 14.6715 53.1804 14.8356 53.1804 15.0326C53.1804 15.2788 53.2625 15.4593 53.4266 15.6071C53.5908 15.7548 53.8041 15.8697 54.0832 15.9846C54.3458 16.0831 54.6576 16.1651 55.0023 16.2308C55.347 16.2964 55.7081 16.3785 56.0692 16.4606C56.4303 16.5426 56.775 16.6411 57.1197 16.756C57.4644 16.8709 57.7762 17.0186 58.0388 17.232C58.3015 17.429 58.5313 17.6752 58.6954 17.9706C58.8595 18.2661 58.9416 18.6436 58.9416 19.0703C58.9416 19.5956 58.8267 20.0387 58.5805 20.4163C58.3343 20.7774 58.0224 21.0892 57.6449 21.319C57.2674 21.5488 56.8242 21.7129 56.3647 21.8278C55.8887 21.9263 55.4291 21.992 54.9695 21.992C54.4114 21.992 53.8862 21.9263 53.4102 21.795C52.9342 21.6637 52.5075 21.4667 52.1628 21.2205C51.8181 20.9579 51.5391 20.646 51.3421 20.2521C51.1451 19.8746 51.0302 19.415 51.0138 18.8734H52.9999V18.8898H53.0163ZM59.4997 12.8332H60.9933V10.1413H62.9629V12.8167H64.7356V14.2776H62.9629V19.0375C62.9629 19.2509 62.9793 19.415 62.9958 19.5792C63.0122 19.7269 63.0614 19.8582 63.1107 19.9567C63.1763 20.0552 63.2748 20.1372 63.3897 20.1865C63.521 20.2357 63.6851 20.2685 63.9149 20.2685C64.0462 20.2685 64.194 20.2685 64.3253 20.2521C64.4566 20.2357 64.6043 20.2193 64.7356 20.1865V21.7129C64.5222 21.7458 64.3088 21.7622 64.0955 21.7786C63.8821 21.8114 63.6851 21.8114 63.4553 21.8114C62.9301 21.8114 62.5198 21.7622 62.2079 21.6637C61.896 21.5652 61.6498 21.4175 61.4693 21.2369C61.2887 21.04 61.1738 20.8102 61.1082 20.5311C61.0425 20.2521 61.0097 19.9074 60.9933 19.5463V14.294H59.4997V12.8003V12.8332ZM66.1143 12.8332H67.9691V14.0478H68.0019C68.2809 13.5225 68.6585 13.1614 69.1509 12.9316C69.6433 12.7019 70.1685 12.587 70.7594 12.587C71.4652 12.587 72.0725 12.7019 72.5977 12.9645C73.123 13.2107 73.5497 13.5389 73.8944 13.9821C74.2391 14.4089 74.5017 14.9177 74.6658 15.4922C74.83 16.0666 74.9285 16.6904 74.9285 17.3305C74.9285 17.9378 74.8464 18.5123 74.6987 19.0703C74.5345 19.6284 74.3047 20.1372 73.9929 20.564C73.681 20.9907 73.2871 21.3354 72.7947 21.598C72.3023 21.8606 71.7442 21.992 71.0877 21.992C70.8086 21.992 70.5132 21.9591 70.2342 21.9099C69.9551 21.8607 69.6761 21.7786 69.4135 21.6637C69.1509 21.5488 68.9047 21.4011 68.6913 21.2205C68.4615 21.04 68.2809 20.8266 68.1332 20.5968H68.1004V25.0449H66.1308V12.8332H66.1143ZM72.9917 17.2977C72.9917 16.9037 72.9424 16.5098 72.8275 16.1323C72.729 15.7548 72.5649 15.4265 72.3515 15.1311C72.1381 14.8356 71.8755 14.6058 71.5801 14.4253C71.2682 14.2447 70.9071 14.1627 70.5132 14.1627C69.6925 14.1627 69.0688 14.4417 68.642 15.0162C68.2317 15.5907 68.0183 16.3621 68.0183 17.3141C68.0183 17.7737 68.0676 18.184 68.1825 18.5615C68.2974 18.939 68.4451 19.2673 68.6749 19.5463C68.8882 19.8254 69.1509 20.0387 69.4627 20.2029C69.7746 20.367 70.1193 20.4491 70.5296 20.4491C70.9892 20.4491 71.3503 20.3506 71.6621 20.17C71.974 19.9895 72.2202 19.7433 72.4336 19.4643C72.6305 19.1688 72.7783 18.8405 72.8603 18.463C72.9424 18.0691 72.9917 17.6916 72.9917 17.2977ZM76.4549 9.43555H78.4246V11.2903H76.4549V9.43555ZM76.4549 12.8332H78.4246V21.7458H76.4549V12.8332ZM80.1808 9.43555H82.1504V21.7458H80.1808V9.43555ZM88.1578 21.992C87.452 21.992 86.8119 21.8771 86.2539 21.6309C85.6958 21.3847 85.2362 21.0728 84.8423 20.6625C84.4648 20.2521 84.1693 19.7433 83.9724 19.1688C83.7754 18.5943 83.6605 17.9542 83.6605 17.2813C83.6605 16.6083 83.759 15.9846 83.9724 15.4101C84.1693 14.8356 84.4648 14.3432 84.8423 13.9165C85.2198 13.5061 85.6958 13.1779 86.2539 12.9481C86.8119 12.7183 87.452 12.587 88.1578 12.587C88.8636 12.587 89.5037 12.7019 90.0618 12.9481C90.6199 13.1779 91.0795 13.5061 91.4734 13.9165C91.8509 14.3268 92.1463 14.8356 92.3433 15.4101C92.5403 15.9846 92.6552 16.6083 92.6552 17.2813C92.6552 17.9706 92.5567 18.5943 92.3433 19.1688C92.1299 19.7433 91.8509 20.2357 91.4734 20.6625C91.0959 21.0728 90.6199 21.4011 90.0618 21.6309C89.5037 21.8607 88.88 21.992 88.1578 21.992ZM88.1578 20.4327C88.5846 20.4327 88.9785 20.3342 89.2904 20.1536C89.6186 19.9731 89.8648 19.7269 90.0782 19.4314C90.2916 19.136 90.4393 18.7913 90.5378 18.4302C90.6363 18.0527 90.6855 17.6752 90.6855 17.2813C90.6855 16.9037 90.6363 16.5262 90.5378 16.1487C90.4393 15.7712 90.2916 15.4429 90.0782 15.1475C89.8648 14.852 89.6022 14.6222 89.2904 14.4417C88.9621 14.2611 88.5846 14.1627 88.1578 14.1627C87.7311 14.1627 87.3372 14.2611 87.0253 14.4417C86.697 14.6222 86.4508 14.8685 86.2374 15.1475C86.0241 15.4429 85.8763 15.7712 85.7779 16.1487C85.6794 16.5262 85.6301 16.9037 85.6301 17.2813C85.6301 17.6752 85.6794 18.0527 85.7779 18.4302C85.8763 18.8077 86.0241 19.136 86.2374 19.4314C86.4508 19.7269 86.7134 19.9731 87.0253 20.1536C87.3536 20.3506 87.7311 20.4327 88.1578 20.4327ZM93.246 12.8332H94.7397V10.1413H96.7093V12.8167H98.482V14.2776H96.7093V19.0375C96.7093 19.2509 96.7257 19.415 96.7422 19.5792C96.7586 19.7269 96.8078 19.8582 96.857 19.9567C96.9227 20.0552 97.0212 20.1372 97.1361 20.1865C97.2674 20.2357 97.4315 20.2685 97.6613 20.2685C97.7926 20.2685 97.9403 20.2685 98.0717 20.2521C98.203 20.2357 98.3507 20.2193 98.482 20.1865V21.7129C98.2686 21.7458 98.0552 21.7622 97.8419 21.7786C97.6285 21.8114 97.4315 21.8114 97.2017 21.8114C96.6765 21.8114 96.2662 21.7622 95.9543 21.6637C95.6424 21.5652 95.3962 21.4175 95.2157 21.2369C95.0351 21.04 94.9202 20.8102 94.8546 20.5311C94.7889 20.2521 94.7561 19.9074 94.7397 19.5463V14.294H93.246V12.8003V12.8332Z"
            fill="black"
          />
          <path
            d="M23.5864 9.4351H14.5753L11.8014 0.867188L9.01107 9.4351L0 9.41868L7.28764 14.7203L4.49733 23.2882L11.785 17.9866L19.0726 23.2882L16.2987 14.7203L23.5864 9.4351Z"
            fill="#00B67A"
          />
          <path
            d="M16.9228 16.6575L16.2991 14.7207L11.8018 17.987L16.9228 16.6575Z"
            fill="#005128"
          />
        </svg>
      </div>
      <div className={styles.stars__block}>
        <svg
          width="78"
          height="13"
          viewBox="0 0 78 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.8">
            <path
              d="M6.06627 1.26951C6.32349 0.477872 7.44344 0.477872 7.70066 1.26951L8.61969 4.09798C8.73472 4.45201 9.06463 4.69171 9.43688 4.69171H12.4109C13.2433 4.69171 13.5894 5.75685 12.916 6.24611L10.5099 7.9942C10.2088 8.213 10.0828 8.60084 10.1978 8.95487L11.1168 11.7833C11.374 12.575 10.468 13.2333 9.79456 12.744L7.38852 10.9959C7.08736 10.7771 6.67957 10.7771 6.37841 10.9959L3.97237 12.744C3.29896 13.2333 2.3929 12.575 2.65012 11.7833L3.56914 8.95487C3.68418 8.60084 3.55816 8.213 3.257 7.9942L0.85096 6.24611C0.177554 5.75685 0.523639 4.69171 1.35601 4.69171H4.33005C4.7023 4.69171 5.03221 4.45201 5.14724 4.09798L6.06627 1.26951Z"
              fill="#F59E0B"
            />
            <path
              d="M22.0458 1.26951C22.303 0.477872 23.4229 0.477872 23.6802 1.26951L24.5992 4.09798C24.7142 4.45201 25.0441 4.69171 25.4164 4.69171H28.3904C29.2228 4.69171 29.5689 5.75685 28.8955 6.24611L26.4894 7.9942C26.1883 8.213 26.0622 8.60084 26.1773 8.95487L27.0963 11.7833C27.3535 12.575 26.4475 13.2333 25.7741 12.744L23.368 10.9959C23.0669 10.7771 22.6591 10.7771 22.3579 10.9959L19.9519 12.744C19.2785 13.2333 18.3724 12.575 18.6296 11.7833L19.5486 8.95487C19.6637 8.60084 19.5377 8.213 19.2365 7.9942L16.8305 6.24611C16.157 5.75685 16.5031 4.69171 17.3355 4.69171H20.3095C20.6818 4.69171 21.0117 4.45201 21.1267 4.09798L22.0458 1.26951Z"
              fill="#F59E0B"
            />
            <path
              d="M38.0243 1.26951C38.2815 0.477872 39.4015 0.477872 39.6587 1.26951L40.5777 4.09798C40.6927 4.45201 41.0226 4.69171 41.3949 4.69171H44.3689C45.2013 4.69171 45.5474 5.75685 44.874 6.24611L42.4679 7.9942C42.1668 8.213 42.0408 8.60084 42.1558 8.95487L43.0748 11.7833C43.332 12.575 42.426 13.2333 41.7526 12.744L39.3465 10.9959C39.0454 10.7771 38.6376 10.7771 38.3364 10.9959L35.9304 12.744C35.257 13.2333 34.3509 12.575 34.6081 11.7833L35.5272 8.95487C35.6422 8.60084 35.5162 8.213 35.215 7.9942L32.809 6.24611C32.1356 5.75685 32.4816 4.69171 33.314 4.69171H36.2881C36.6603 4.69171 36.9902 4.45201 37.1053 4.09798L38.0243 1.26951Z"
              fill="#F59E0B"
            />
            <path
              d="M54.0038 1.26951C54.261 0.477872 55.3809 0.477872 55.6382 1.26951L56.5572 4.09798C56.6722 4.45201 57.0021 4.69171 57.3744 4.69171H60.3484C61.1808 4.69171 61.5269 5.75685 60.8535 6.24611L58.4474 7.9942C58.1463 8.213 58.0203 8.60084 58.1353 8.95487L59.0543 11.7833C59.3115 12.575 58.4055 13.2333 57.7321 12.744L55.326 10.9959C55.0249 10.7771 54.6171 10.7771 54.3159 10.9959L51.9099 12.744C51.2365 13.2333 50.3304 12.575 50.5876 11.7833L51.5066 8.95487C51.6217 8.60084 51.4957 8.213 51.1945 7.9942L48.7885 6.24611C48.1151 5.75685 48.4611 4.69171 49.2935 4.69171H52.2675C52.6398 4.69171 52.9697 4.45201 53.0847 4.09798L54.0038 1.26951Z"
              fill="#F59E0B"
            />
            <path
              d="M69.9833 1.26951C70.2405 0.477872 71.3604 0.477872 71.6177 1.26951L72.5367 4.09798C72.6517 4.45201 72.9816 4.69171 73.3539 4.69171H76.3279C77.1603 4.69171 77.5064 5.75685 76.833 6.24611L74.4269 7.9942C74.1258 8.213 73.9997 8.60084 74.1148 8.95487L75.0338 11.7833C75.291 12.575 74.385 13.2333 73.7116 12.744L71.3055 10.9959C71.0044 10.7771 70.5966 10.7771 70.2954 10.9959L67.8894 12.744C67.216 13.2333 66.3099 12.575 66.5671 11.7833L67.4861 8.95487C67.6012 8.60084 67.4752 8.213 67.174 7.9942L64.768 6.24611C64.0945 5.75685 64.4406 4.69171 65.273 4.69171H68.247C68.6193 4.69171 68.9492 4.45201 69.0642 4.09798L69.9833 1.26951Z"
              fill="#F59E0B"
            />
          </g>
        </svg>
      </div>
      <span className={styles.heroTrust__mark}>4900+</span>
    </div>
  );
};
