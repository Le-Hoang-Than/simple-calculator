# simple-calculator
Ứng dụng máy tính đa chế độ trên web, lấy cảm hứng từ Windows Calculator trên Windows 10/11, hỗ trợ nhiều chế độ tính toán và chuyển đổi đơn vị.

## Tính năng

- **Máy tính cơ bản (Standard)**: Các phép toán cơ bản với chức năng lưu lịch sử tính toán.
- **Máy tính khoa học (Scientific)**: Hỗ trợ các hàm lượng giác, logarit, lũy thừa,...
- **Máy tính lập trình (Programmer)**: Tính toán hệ nhị phân, bát phân, thập phân, thập lục phân và các phép toán bit.
- **Máy tính đồ thị (Graphing)**: Vẽ đồ thị hàm số tương tác.
- **Tính toán ngày tháng (Date Calculation)**: Tính khoảng cách giữa các ngày.
- **Chuyển đổi đơn vị**: Hỗ trợ chuyển đổi tiền tệ, thể tích, chiều dài, khối lượng, nhiệt độ, năng lượng, diện tích, tốc độ, thời gian, công suất, dữ liệu số, áp suất và góc.

## Công nghệ sử dụng

- **React**: Thư viện xây dựng giao diện người dùng theo component.
- **JavaScript (ES6+)**: Ngôn ngữ chính xử lý logic và phép tính.
- **React-Plotly.js**: Thư viện vẽ đồ thị tương tác.
- **Math.js**: Hỗ trợ các phép toán toán học nâng cao.
- **localStorage**: Lưu trữ lịch sử tính toán trên trình duyệt.
- **Tailwind CSS** (tuỳ chọn): Thiết kế giao diện hiện đại và linh hoạt.

## Cấu trúc dự án

- `/src/modes`: Các chế độ máy tính được tổ chức theo thư mục.
- `/src/components`: Các thành phần UI tái sử dụng.
- `/src/converters`: Logic chuyển đổi đơn vị.
- `/src/context`: Quản lý trạng thái ứng dụng bằng React Context API.
- `/src/routes`: Quản lý điều hướng giữa các chế độ máy tính.

## Bắt đầu

1. Clone repo về máy:
   ```bash
   git clone https://github.com/your-username/may-tinh-da-che-do.git
