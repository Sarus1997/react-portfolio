import React from "react";
// reactstrap components
import {
    Container,
} from "reactstrap";



export default function Signup() {
    return (
        <div className="section section-signup">
            <Container>
                <h3 className="display-3 text-white">
                    Power BI
                    <hr className="line-success" style={{ width: '150px', marginTop: '20px' }} />
                </h3>
                <p className="text-white mb-3">
                    โปรเจกต์ที่ได้ทำระหว่างเรียน ซึ่งนำข้อมูลไปสร้างเป็น Report บน Power BI
                </p>
                <iframe title="ภาพรวม" width="100%" height="360" src="https://app.powerbi.com/view?r=eyJrIjoiNTc3ZmUwZTYtNTMzOC00MmIyLThkNGEtMmFhYTA3YWJlMzYxIiwidCI6IjcwYzQzYjM1LTBhMzItNGUxYi05MmE0LTZhYWY2ODcwYTJlOCIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>

                <hr className="line-primary" style={{ width: '100%', marginTop: '20px' }} />
                <br />
                <iframe title="ร้าน" width="100%" height="360" src="https://app.powerbi.com/view?r=eyJrIjoiOGFjYjk4YjEtZGZmYy00YjVjLThhNmEtMGU2ODFkZmYxZDNiIiwidCI6IjcwYzQzYjM1LTBhMzItNGUxYi05MmE0LTZhYWY2ODcwYTJlOCIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
                <hr className="line-primary" style={{ width: '100%', marginTop: '20px' }} />
            </Container>
        </div>
    );
}