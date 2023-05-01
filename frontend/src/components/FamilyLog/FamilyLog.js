import React, { useState } from "react";
import classes from "./FamilyLog.module.css";
import foot from "./../../img/foot.svg";
import line from "./../../img/line.svg";
import baby from "./../../img/baby.png";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const FamilyLog = () => {
  const [toggleMonth, setIsToggleMonth] = useState(1);

  const [toggleYear,setIsToggleYear] = useState(1);

  const showMonthData = (index) => {
    setIsToggleMonth(index);
  };


  const showYearData = (id) => {
    setIsToggleYear(id);
  };

  return (
    <div>
      <Header/>
      <div className={classes.familyLogTop}>
        <div className={classes.rowTop}>
          <div className={classes.left}>
            <img src={foot} alt="foot" />
          </div>
          <div className={classes.right}>
            <div className={classes.years}>
              <div
              onClick={() => {
                showYearData(1);
              }}
              className={
                toggleYear === 1
                  ? `${classes.arrow} ${classes.arrowActive}`
                  : `${classes.arrow}`
              }
              
              >
                <p>2021</p>
              </div>
              <div onClick={() => {
                showYearData(2);
              }}
              className={
                toggleYear === 2
                  ? `${classes.arrow} ${classes.arrowActive}`
                  : `${classes.arrow}`
              }>
                <p>2022</p>
              </div>
              <div 
              onClick={() => {
                showYearData(3);
              }}
              className={
                toggleYear === 3
                  ? `${classes.arrow} ${classes.arrowActive}`
                  : `${classes.arrow}`
              }
              >
                <p>2023</p>
              </div>
            </div>
            <img src={line} alt="line" />
            <div className={classes.months}>
              <span
                onClick={() => {
                  showMonthData(1);
                }}
                className={
                  toggleMonth === 1
                    ? `${classes.tabs} ${classes.findActive}`
                    : `${classes.tabs}`
                }
              >
                1
              </span>
              <span
                onClick={() => {
                  showMonthData(2);
                }}
                className={
                  toggleMonth === 2
                    ? `${classes.tabs} ${classes.findActive}`
                    : `${classes.tabs}`
                }
              >
                2
              </span>
              <span
                onClick={() => {
                  showMonthData(3);
                }}
                className={
                  toggleMonth === 3
                    ? `${classes.tabs} ${classes.findActive}`
                    : `${classes.tabs}`
                }
              >
                3
              </span>
              <span
                onClick={() => {
                  showMonthData(4);
                }}
                className={
                  toggleMonth === 4
                    ? `${classes.tabs} ${classes.findActive}`
                    : `${classes.tabs}`
                }
              >
                4
              </span>
              <span
                onClick={() => {
                  showMonthData(5);
                }}
                className={
                  toggleMonth === 5
                    ? `${classes.tabs} ${classes.findActive}`
                    : `${classes.tabs}`
                }
              >
                5
              </span>
              <span
                onClick={() => {
                  showMonthData(6);
                }}
                className={
                  toggleMonth === 6
                    ? `${classes.tabs} ${classes.findActive}`
                    : `${classes.tabs}`
                }
              >
                6
              </span>
              <span
                onClick={() => {
                  showMonthData(7);
                }}
                className={
                  toggleMonth === 7
                    ? `${classes.tabs} ${classes.findActive}`
                    : `${classes.tabs}`
                }
              >
                7
              </span>
              <span
                onClick={() => {
                  showMonthData(8);
                }}
                className={
                  toggleMonth === 8
                    ? `${classes.tabs} ${classes.findActive}`
                    : `${classes.tabs}`
                }
              >
                8
              </span>
              <span
                onClick={() => {
                  showMonthData(9);
                }}
                className={
                  toggleMonth === 9
                    ? `${classes.tabs} ${classes.findActive}`
                    : `${classes.tabs}`
                }
              >
                9
              </span>
              <span
                onClick={() => {
                  showMonthData(10);
                }}
                className={
                  toggleMonth === 10
                    ? `${classes.tabs} ${classes.findActive}`
                    : `${classes.tabs}`
                }
              >
                10
              </span>
              <span
                onClick={() => {
                  showMonthData(11);
                }}
                className={
                  toggleMonth === 11
                    ? `${classes.tabs} ${classes.findActive}`
                    : `${classes.tabs}`
                }
              >
                11
              </span>
              <span
                onClick={() => {
                  showMonthData(12);
                }}
                className={
                  toggleMonth === 12
                    ? `${classes.tabs} ${classes.findActive}`
                    : `${classes.tabs}`
                }
              >
                12
              </span>
            </div>
          </div>
        </div>

        <div className={classes.details}>
          <div className={classes.addLog}>
            <Link to="/add-Log">
              <span>+</span>
            </Link>
          </div>

          <div
            className={
              toggleMonth === 1
                ? `${classes.data} ${classes.findActiveContent}`
                : `${classes.data}`
            }
          >
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.pic}>
                  <img src={baby} alt="baby" />
                  <img src={baby} alt="baby" />
                </div>
                <div className={classes.text}>
                  <h2>First Photo Shoot</h2>
                  <br />
                  <p>
                    Emily’s first photo shoot experience! As a parent, a baby's
                    photo shoot experience is both exciting and nerve-wracking.
                    Seeing your little one dressed up in adorable outfits and
                    captured in timeless poses is heartwarming, but it can also be
                    challenging to keep them calm and cooperative throughout the
                    session. Nonetheless, the final product is worth the effort,
                    and you'll cherish the memories captured forever.
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}>
                <div>
                  <p>upcoming</p>
                </div>
              </div>
            </div>

            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}></div>
            </div>
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleMonth === 2
                ? `${classes.data} ${classes.findActiveContent}`
                : `${classes.data}`
            }
          >
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.pic}>
                  <img src={baby} alt="baby" />
                  <img src={baby} alt="baby" />
                </div>
                <div className={classes.text}>
                  <h2>Second Photo Shoot</h2>
                  <br />
                  <p>
                    Emily’s first photo shoot experience! As a parent, a baby's
                    photo shoot experience is both exciting and nerve-wracking.
                    Seeing your little one dressed up in adorable outfits and
                    captured in timeless poses is heartwarming, but it can also be
                    challenging to keep them calm and cooperative throughout the
                    session. Nonetheless, the final product is worth the effort,
                    and you'll cherish the memories captured forever.
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}>
                <div>
                  <p>upcoming</p>
                </div>
              </div>
            </div>

            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}></div>
            </div>
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleMonth === 3
                ? `${classes.data} ${classes.findActiveContent}`
                : `${classes.data}`
            }
          >
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.pic}>
                  <img src={baby} alt="baby" />
                  <img src={baby} alt="baby" />
                </div>
                <div className={classes.text}>
                  <h2>Third Photo Shoot</h2>
                  <br />
                  <p>
                    Emily’s first photo shoot experience! As a parent, a baby's
                    photo shoot experience is both exciting and nerve-wracking.
                    Seeing your little one dressed up in adorable outfits and
                    captured in timeless poses is heartwarming, but it can also be
                    challenging to keep them calm and cooperative throughout the
                    session. Nonetheless, the final product is worth the effort,
                    and you'll cherish the memories captured forever.
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}>
                <div>
                  <p>upcoming</p>
                </div>
              </div>
            </div>

            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}></div>
            </div>
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleMonth === 4
                ? `${classes.data} ${classes.findActiveContent}`
                : `${classes.data}`
            }
          >
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.pic}>
                  <img src={baby} alt="baby" />
                  <img src={baby} alt="baby" />
                </div>
                <div className={classes.text}>
                  <h2>Fourth Photo Shoot</h2>
                  <br />
                  <p>
                    Emily’s first photo shoot experience! As a parent, a baby's
                    photo shoot experience is both exciting and nerve-wracking.
                    Seeing your little one dressed up in adorable outfits and
                    captured in timeless poses is heartwarming, but it can also be
                    challenging to keep them calm and cooperative throughout the
                    session. Nonetheless, the final product is worth the effort,
                    and you'll cherish the memories captured forever.
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}>
                <div>
                  <p>upcoming</p>
                </div>
              </div>
            </div>

            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}></div>
            </div>
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleMonth === 5
                ? `${classes.data} ${classes.findActiveContent}`
                : `${classes.data}`
            }
          >
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.pic}>
                  <img src={baby} alt="baby" />
                  <img src={baby} alt="baby" />
                </div>
                <div className={classes.text}>
                  <h2>Fifth Photo Shoot</h2>
                  <br />
                  <p>
                    Emily’s first photo shoot experience! As a parent, a baby's
                    photo shoot experience is both exciting and nerve-wracking.
                    Seeing your little one dressed up in adorable outfits and
                    captured in timeless poses is heartwarming, but it can also be
                    challenging to keep them calm and cooperative throughout the
                    session. Nonetheless, the final product is worth the effort,
                    and you'll cherish the memories captured forever.
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}>
                <div>
                  <p>upcoming</p>
                </div>
              </div>
            </div>

            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}></div>
            </div>
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleMonth === 6
                ? `${classes.data} ${classes.findActiveContent}`
                : `${classes.data}`
            }
          >
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.pic}>
                  <img src={baby} alt="baby" />
                  <img src={baby} alt="baby" />
                </div>
                <div className={classes.text}>
                  <h2>Sixth Photo Shoot</h2>
                  <br />
                  <p>
                    Emily’s first photo shoot experience! As a parent, a baby's
                    photo shoot experience is both exciting and nerve-wracking.
                    Seeing your little one dressed up in adorable outfits and
                    captured in timeless poses is heartwarming, but it can also be
                    challenging to keep them calm and cooperative throughout the
                    session. Nonetheless, the final product is worth the effort,
                    and you'll cherish the memories captured forever.
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}>
                <div>
                  <p>upcoming</p>
                </div>
              </div>
            </div>

            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}></div>
            </div>
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleMonth === 7
                ? `${classes.data} ${classes.findActiveContent}`
                : `${classes.data}`
            }
          >
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.pic}>
                  <img src={baby} alt="baby" />
                  <img src={baby} alt="baby" />
                </div>
                <div className={classes.text}>
                  <h2>Seven Photo Shoot</h2>
                  <br />
                  <p>
                    Emily’s first photo shoot experience! As a parent, a baby's
                    photo shoot experience is both exciting and nerve-wracking.
                    Seeing your little one dressed up in adorable outfits and
                    captured in timeless poses is heartwarming, but it can also be
                    challenging to keep them calm and cooperative throughout the
                    session. Nonetheless, the final product is worth the effort,
                    and you'll cherish the memories captured forever.
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}>
                <div>
                  <p>upcoming</p>
                </div>
              </div>
            </div>

            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}></div>
            </div>
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleMonth === 8
                ? `${classes.data} ${classes.findActiveContent}`
                : `${classes.data}`
            }
          >
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.pic}>
                  <img src={baby} alt="baby" />
                  <img src={baby} alt="baby" />
                </div>
                <div className={classes.text}>
                  <h2>Eigth Photo Shoot</h2>
                  <br />
                  <p>
                    Emily’s first photo shoot experience! As a parent, a baby's
                    photo shoot experience is both exciting and nerve-wracking.
                    Seeing your little one dressed up in adorable outfits and
                    captured in timeless poses is heartwarming, but it can also be
                    challenging to keep them calm and cooperative throughout the
                    session. Nonetheless, the final product is worth the effort,
                    and you'll cherish the memories captured forever.
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}>
                <div>
                  <p>upcoming</p>
                </div>
              </div>
            </div>

            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}></div>
            </div>
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleMonth === 9
                ? `${classes.data} ${classes.findActiveContent}`
                : `${classes.data}`
            }
          >
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.pic}>
                  <img src={baby} alt="baby" />
                  <img src={baby} alt="baby" />
                </div>
                <div className={classes.text}>
                  <h2>Ninth Photo Shoot</h2>
                  <br />
                  <p>
                    Emily’s first photo shoot experience! As a parent, a baby's
                    photo shoot experience is both exciting and nerve-wracking.
                    Seeing your little one dressed up in adorable outfits and
                    captured in timeless poses is heartwarming, but it can also be
                    challenging to keep them calm and cooperative throughout the
                    session. Nonetheless, the final product is worth the effort,
                    and you'll cherish the memories captured forever.
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}>
                <div>
                  <p>upcoming</p>
                </div>
              </div>
            </div>

            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}></div>
            </div>
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleMonth === 10
                ? `${classes.data} ${classes.findActiveContent}`
                : `${classes.data}`
            }
          >
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.pic}>
                  <img src={baby} alt="baby" />
                  <img src={baby} alt="baby" />
                </div>
                <div className={classes.text}>
                  <h2>Ten Photo Shoot</h2>
                  <br />
                  <p>
                    Emily’s first photo shoot experience! As a parent, a baby's
                    photo shoot experience is both exciting and nerve-wracking.
                    Seeing your little one dressed up in adorable outfits and
                    captured in timeless poses is heartwarming, but it can also be
                    challenging to keep them calm and cooperative throughout the
                    session. Nonetheless, the final product is worth the effort,
                    and you'll cherish the memories captured forever.
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}>
                <div>
                  <p>upcoming</p>
                </div>
              </div>
            </div>

            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}></div>
            </div>
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleMonth === 11
                ? `${classes.data} ${classes.findActiveContent}`
                : `${classes.data}`
            }
          >
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.pic}>
                  <img src={baby} alt="baby" />
                  <img src={baby} alt="baby" />
                </div>
                <div className={classes.text}>
                  <h2>Eleven Photo Shoot</h2>
                  <br />
                  <p>
                    Emily’s first photo shoot experience! As a parent, a baby's
                    photo shoot experience is both exciting and nerve-wracking.
                    Seeing your little one dressed up in adorable outfits and
                    captured in timeless poses is heartwarming, but it can also be
                    challenging to keep them calm and cooperative throughout the
                    session. Nonetheless, the final product is worth the effort,
                    and you'll cherish the memories captured forever.
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}>
                <div>
                  <p>upcoming</p>
                </div>
              </div>
            </div>

            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}></div>
            </div>
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleMonth === 12
                ? `${classes.data} ${classes.findActiveContent}`
                : `${classes.data}`
            }
          >
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.pic}>
                  <img src={baby} alt="baby" />
                  <img src={baby} alt="baby" />
                </div>
                <div className={classes.text}>
                  <h2>Twelve Photo Shoot</h2>
                  <br />
                  <p>
                    Emily’s first photo shoot experience! As a parent, a baby's
                    photo shoot experience is both exciting and nerve-wracking.
                    Seeing your little one dressed up in adorable outfits and
                    captured in timeless poses is heartwarming, but it can also be
                    challenging to keep them calm and cooperative throughout the
                    session. Nonetheless, the final product is worth the effort,
                    and you'll cherish the memories captured forever.
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}>
                <div>
                  <p>upcoming</p>
                </div>
              </div>
            </div>

            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className={classes.upcoming}>
              <div className={classes.dot}></div>
              <div className={classes.textUpcoming}></div>
            </div>
            <div className={classes.card}>
              <div className={classes.lineLeft}></div>
              <div className={classes.cardInner}>
                <div className={classes.text}>
                  <h2>
                    Doctor’s appointment <span>03/15/2023</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyLog;
