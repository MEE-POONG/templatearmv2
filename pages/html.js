/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import IndexPage from "../layouts/IndexPage.js";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
export default function Html() {
  return (
    <>
      <section className="my-5">
        <Container>
          {/* 1 */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>1. {"<!DOCTYPE html>"}</Card.Title>
              <Card.Text>
                เอกสาร HTML ทั้งหมดต้องเริ่มต้นด้วยการ{"<!DOCTYPE>"}ประกาศ
                การประกาศไม่ใช่แท็ก HTML เป็น "ข้อมูล" สำหรับเบราว์เซอร์เกี่ยวกับประเภทเอกสารที่คาดหวัง
                ไม่ต้องมีแท็กปิด
              </Card.Text>
            </Card.Body>
          </Card>
          {/* 2 */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>2. {"<a> </a>"}</Card.Title>
              <Card.Text>
                แท็ก{" <a> "}กำหนดไฮเปอร์ลิงก์ ซึ่งใช้เพื่อเชื่อมโยงจากหน้าหนึ่งไปยังอีกหน้าหนึ่ง
                <br />
                คุณลักษณะที่สำคัญที่สุดของ{" <a> "}องค์ประกอบคือ hrefแอตทริบิวต์ ซึ่งระบุปลายทางของลิงก์ตามค่าเริ่มต้น ลิงก์จะปรากฏดังนี้ในทุกเบราว์เซอร์:
                <br />
                *  ลิงก์ที่ยังไม่ได้เข้าชมจะถูกขีดเส้นใต้และสีน้ำเงิน
                <br />
                *  ลิงก์ที่เข้าชมถูกขีดเส้นใต้และสีม่วง
                <br />
                *  ลิงก์ที่ใช้งานอยู่จะถูกขีดเส้นใต้และสีแดง
                <br />
                {"<a href="}{"https://www.w3schools.com" + ">Visit W3Schools.com!</a>"}
              </Card.Text>
            </Card.Body>
          </Card>
          {/* 3 */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>3. {"<b> </b>"}</Card.Title>
              <Card.Text>
                ทำให้ font เป็นตัวหนา
                <br />
                <div>เล็ก</div>
                <b>เล็ก</b>

              </Card.Text>
            </Card.Body>
          </Card>
          {/* 4 */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>4. {"<br/>"}</Card.Title>
              <Card.Text>
                ขึ้นบรรทัดใหม่
                <br />
                <div>เล็ก</div>
                <br />
                <b>เล็ก</b>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* 5 */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>5. {"<div></div>"}</Card.Title>
              <Card.Text>
                <div> แท็ก เริ่มต้นื้นฐาน เป็นแท็กว่างเปล่าทีเป็นแท็กว่างเปล่า</div>
                <div> แท็ก เริ่มต้นื้นฐาน เป็นแท็กว่างเปล่าทีเป็นแท็กว่างเปล่า</div>
                <div> แท็ก เริ่มต้นื้นฐาน เป็นแท็กว่างเปล่าทีเป็นแท็กว่างเปล่า</div>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* 6 */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>6. {"<nav></nav>"}</Card.Title>
              <Card.Text>
                แท็บส่วนใหญ่ทำเป็นเมนู
                <br />
                <nav>
                  <a href="/html/">HTML</a> |
                  <a href="/css/">CSS</a> |
                  <a href="/js/">JavaScript</a> |
                  <a href="/python/">Python</a>
                </nav>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* 7 */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>7. {"<select><option></option></select>"}</Card.Title>
              <Card.Text>
                สำหรับเลืือกหลายรายการหลายประเภท
                <br />
                <select id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* 8 */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>8. {"<p></p>"}</Card.Title>
              <Card.Text>
                แท็กที่ทำมาลองรับการใส่เนื้อหา
                <br />
                <p>This is some text in a paragraph.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* 9 */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>9. {"<table></table>"}</Card.Title>
              <Card.Text>
                การสร้างตาราง
                <br />
                <p>  {"<table>"} สร้างตาราง</p>
                <p>  {"<thead>"} สำหรับเจาะจงแยกหัวตาราง</p>
                <p>  {"<tbody>"} สำรหรับแยกเนื้อหาในตาราง</p>
                <p> {"<tr>"}แถวใหม่</p>
                <p> {"<th>"}ตัวพิมใหญ่</p>
                <p> {"<td>"}ตัวพิมเล็ก</p>
                <table >
                  <thead style={{ border: "1px solid red" }}>
                    <tr>
                      <th style={{ border: "1px solid green" }}>Month</th>
                      <th>Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>January</td>
                      <td>$100</td>
                    </tr>
                  </tbody>
                </table>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* 10 */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>10. {"<span></span>"}</Card.Title>
              <Card.Text>
                ยังคำเนื้อหาให้อยู่แถวเดียวกัน
                <p>My mother has <span style={{ color: "red" }}>blue</span> eyes.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* 11 */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>11. {"<input />"}</Card.Title>
              <Card.Text>
                แท็ก input  ระบุช่องป้อนข้อมูลที่ผู้ใช้สามารถป้อนข้อมูลได้
                <p>My mother has <span style={{ color: "red" }}>blue</span> eyes.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* 12 */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>12. {"<input />"}</Card.Title>
              <Card.Text>
                แท็ก input  ระบุช่องป้อนข้อมูลที่ผู้ใช้สามารถป้อนข้อมูลได้
                <p>My mother has <span style={{ color: "red" }}>blue</span> eyes.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* 13 */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>13. {"<img  />"}</Card.Title>
              <Card.Text>
                แท็ก img   ระบุช่องป้อนข้อมูลที่ผู้ใช้สามารถป้อนข้อมูลได้
                <br />
                <span class="tagnamecolor" style={{ color: "brown" }}>
                  <span class="tagcolor" style={{ color: "mediumblue" }}>&lt;
                  </span>
                  img
                  <span class="attributecolor" style={{ color: "red" }}>
                    src
                    <span class="attributevaluecolor" style={{ color: "mediumblue" }}>="img_girl.jpg"</span>
                    alt
                    <span class="attributevaluecolor" style={{ color: "mediumblue" }}>="Girl in a jacket"</span>
                    width
                    <span class="attributevaluecolor" style={{ color: "mediumblue" }}>="500"</span>
                    height<span class="attributevaluecolor" style={{ color: "mediumblue" }}>="600"
                    </span>
                  </span>
                  <span class="tagcolor" style={{ color: "mediumblue" }}>&gt;</span>
                </span>
                <img src="./img/home/bootstrap.png" width={250} />
              </Card.Text>
            </Card.Body>
          </Card>
          {/* 14 */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>14. {"<i> </i>"}</Card.Title>
              <Card.Text>
                แท็ก input  ระบุช่องป้อนข้อมูลที่ผู้ใช้สามารถป้อนข้อมูลได้
                <br />
                {"<p>"}The {"<i>"}RMS Titanic{"</i>"}, a luxury steamship, sank on April 15, 1912 after striking an iceberg.{"</p>"}
                <p><i>Lorem ipsum</i> is the most popular filler text in history.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* 15 */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>15. {"<iframe />"}</Card.Title>
              <Card.Text>
                แท็ก iframe  แปะส่วนต่างๆมาจากเว็บอื่นหรือดึงจากเว็บตัวเองได้ ส่วนใหญ่ จะแปะวิดีโอ
                <br />
                <iframe style={{ width: "100%", height: "375px" }} src="https://www.youtube.com/embed/RbxVX6zKn_o?list=PL0VVVtBqsoupZyJJ3rjqk90_IcDE9exlI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* 16 */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>16. {"<hr />"}</Card.Title>
              <Card.Text>
                แท็ก {"<hr>"}  เส้นขีดเส้นใต้
                <hr />
                {"<hr style={{ width: " + "80%" + " }} />"}
                <hr style={{ width: "80%" }} />
                {"<hr style={{ width: " + "60%" + " }} />"}
                <hr style={{ width: "60%" }} />
                {"<hr style={{ width: " + "40%" + " }} />"}
                <hr style={{ width: "40%" }} />
                {"<hr style={{ width: " + "20%" + ", height: " + "5px" + " }} />"}
                <hr style={{ width: "20%", height: "5px" }} />
                {"<hr style={{ width: " + "40%" + ", height: " + "10px" + ", color: " + "red" + " }} />"}
                <hr style={{ width: "40%", height: "10px", color: "red" }} />
                {"<hr style={{ width: " + "60%" + ", height: " + "15px" + ", color: " + "green" + " }} />"}
                <hr style={{ width: "60%", height: "15px", color: "green" }} />
                <br />
                {"<hr/>"}
                <hr />
              </Card.Text>
            </Card.Body>
          </Card>
          {/* 17 */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>17. {"<h1 />"}</Card.Title>
              <Card.Text>
                {"<h1>This is heading 1</h1>"}
                <br />
                {"<h2>This is heading 2</h2>"}
                <br />
                {"<h3>This is heading 3</h3>"}
                <br />
                {"<h4>This is heading 4</h4>"}
                <br />
                {"<h5>This is heading 5</h5>"}
                <br />
                {"<h6>This is heading 6</h6>"}
                <h1>This is heading 1</h1>
                <h2>This is heading 2</h2>
                <h3>This is heading 3</h3>
                <h4>This is heading 4</h4>
                <h5>This is heading 5</h5>
                <h6>This is heading 6</h6>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </section>
    </>
  );
}
Html.layout = IndexPage;