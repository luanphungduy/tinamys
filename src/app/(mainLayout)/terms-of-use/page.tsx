import React from 'react';
import { Image } from 'antd';
import images from '@/assets/images';
import './TermsOfUse.css';

type Props = {};

const page = (props: Props) => {
    return (
        <div className="flex flex-col items-center h-full">
            <div
                style={{ background: 'rgba(255, 255, 255, 0.4)' }}
                className="flex flex-col justify-center items-start w-[60%] xxl:w-[55%] mx-auto text-[#575757] mt-[30px] p-8 rounded"
            >
                <h2 className="text-[28px] font-medium leading-normal pb-[30px] text-[#000000d9]">
                    Chính sách về quyền riêng tư
                </h2>
                <div>
                    <p className="custom-content-terms-of-use text-[#575757] text-base leading-[100%] font-normal">
                        <p>
                            Quyền riêng tư của bạn rất quan trọng đối với chúng tôi và vì vậy chúng tôi phải minh bạch
                            về việc thu thập, sử dụng và chia sẻ thông tin về bạn.Chính sách này giúp bạn hiểu:
                        </p>
                        <ul>
                            <li>Những thông tin nào được thu thập</li>
                            <li>Cách thông tin đã thu thập được sử dụng</li>
                            <li>Các thông tin khác về quyền riêng tư</li>
                            <li>Thông tin được cung cấp ra bên ngoài như thế nào</li>
                        </ul>
                        <p>
                            Chính sách quyền riêng tư này đề cập đến các thông tin chúng tôi thu thập về bạn khi bạn sử
                            dụng sản phẩm hoặc dịch vụ của chúng tôi hoặc tương tác với chúng tôi (ví dụ khi đăng ký
                            tham gia sự kiện của chúng tôi hoặc khi cách liên hệ với chúng tôi).
                        </p>
                        <p>
                            Chính sách này cũng giải thích các hành động có thể của bạn đối với việc chúng tôi sử dụng
                            thông tin về bạn, bao gồm việc bạn có thể phản đối việc sử dụng một số thông tin nhất định
                            về bạn và việc bạn có thể truy cập và cập nhật một số thông tin của mình.Nếu bạn không đồng
                            ý với chính sách này, thì hãy không truy cập hoặc sử dụng dịch vụ hoặc tương tác với bất kỳ
                            hoạt động kinh doanh của chúng tôi.
                        </p>
                        <p>
                            Khi chúng tôi cung cấp dịch vụ cho một tổ chức, mà bạn sử dụng lại dịch vụ từ tổ chức đó thì
                            thông tin của bạn sẽ được tổ chức đó quản lý.Để biết thêm thông tin, vui lòng xem mục “Thông
                            báo dành cho người dùng cuối” bên dưới.Chính sách này không áp dụng khi chúng tôi xử lý
                            thông tin cá nhân với vai trò là người thay mặt cho các tổ chức đó.
                        </p>

                        <h2>I. NHỮNG THÔNG TIN NÀO ĐƯỢC THU THẬP</h2>

                        <p>
                            Chúng tôi thu thập thông tin về bạn khi bạn cung cấp, khi bạn sử dụng dịch vụ của chúng tôi
                            và khi các nguồn khác cung cấp cho chúng tôi như được mô tả thêm bên dưới.
                        </p>

                        <h3>1.1. Thông tin bạn cung cấp cho chúng tôi</h3>

                        <p>
                            Gồm những thông tin khi bạn nhập để sử dụng dịch vụ hoặc thông tin bạn cung cấp trực tiếp
                            cho chúng tôi. Cụ thể gồm:
                        </p>
                        <ul>
                            <li>
                                Thông tin tài khoản và hồ sơ: Khi bạn đăng ký tài khoản, tạo hoặc sửa hồ sơ, đặt tùy
                                chọn, đăng ký hoặc thực hiện các giao dịch với sự trợ giúp của dịch vụ chúng tôi cung
                                cấp. Ví dụ: Bạn cung cấp thông tin liên hệ của mình và trong một số trường hợp, thông
                                tin thanh toán khi bạn đăng ký dịch vụ. Bạn cũng có thể tùy chọn thêm tên hiển thị, ảnh
                                hồ sơ, chức năng công việc và các chi tiết khác vào hồ sơ thông tin của mình để hiển thị
                                trong dịch vụ của chúng tôi. Tất cả các tùy chọn của bạn khi sử dụng dịch vụ của chúng
                                tôi đều được ghi lại.
                            </li>

                            <li>
                                Dữ liệu bạn cung cấp khi sử dụng dịch vụ của chúng tôi: Gồm các nội dung mà bạn đăng,
                                gửi, nhận và chia sẻ khi sử dụng dịch vụ. Nội dung này bao gồm bất kỳ thông tin nào về
                                bạn mà bạn nhập vào, ví dụ thông tin về công ty, các mục tiêu, nhân sự, quá trình thực
                                hiện. Nội dung cũng bao gồm các files và liên kết bạn tải lên. Nếu bạn sử dụng phiên bản
                                máy chủ hoặc trung tâm dữ liệu của riêng mình, chúng tôi sẽ không lưu trữ, lưu trữ,
                                truyền tải, nhận bất cứ thông tin nào về bạn (bao gồm cả dữ liệu hoạt động), ngoại trừ
                                trong một số trường hợp đặc biệt khi bạn cho phép để chúng tôi có thể cập nhật, điều
                                chỉnh sản phẩm.
                            </li>
                            <li>
                                Thông tin bạn cung cấp qua trang web: Gồm các thông tin khác mà bạn gửi đến các trang
                                web này. Ví dụ: Bạn cung cấp dữ liệu khi phản hồi hoặc khi bạn tham gia vào bất kỳ tính
                                năng tương tác, khảo sát, cuộc thi, khuyến mãi, rút thăm thưởng, hoạt động hoặc sự kiện.
                                - Thông tin bạn cung cấp qua các kênh hỗ trợ: Chúng tôi có dịch vụ hỗ trợ khách hàng,
                                nơi bạn có thể cung cấp thông tin liên quan đến sự cố mà bạn đang gặp phải. Những thông
                                tin cần cung cấp gồm thông tin liên hệ, bản mô tả về sự cố bạn đang gặp, các tài liệu,
                                ảnh chụp màn hình hoặc thông tin có thể hữu ích trong việc giải quyết sự cố.
                            </li>
                            <li>
                                Thông tin thanh toán: Chúng tôi thu thập thông tin thanh toán và lập hóa đơn khi bạn
                                đăng ký một số dịch vụ phải trả phí. Ví dụ thông tin người đại diện, bao gồm tên và
                                thông tin liên hệ khi đăng ký, có thể them thông tin về thẻ thanh toán.
                            </li>
                            <li>
                                Thông tin về thiết bị và kết nối mạng: Chúng tôi thu thập thông tin về máy tính, điện
                                thoại, máy tính bảng hoặc các thiết bị khác mà bạn sử dụng để truy cập dịch vụ, giới hạn
                                trong những thông tin mà trình duyệt web có thể cung cấp. Thông tin này bao gồm các loại
                                kết nối và các thiết lập của bạn khi bạn cài đặt, truy cập, cập nhật hoặc sử dụng dịch
                                vụ của chúng tôi. Chúng tôi cũng thu thập thông tin về hệ điều hành, loại trình duyệt,
                                địa chỉ IP, URL của các trang mà bạn đã truy cập khi sử dụng dịch vụ, ID thiết bị và các
                                dữ liệu về sự cố nếu có. Chúng tôi sử dụng IP địa chỉ và/hoặc tùy chọn quốc gia của bạn
                                để đánh giá vị trí của bạn nhằm cung cấp cho các liên hệ trải nghiệm dịch vụ tốt hơn.
                            </li>
                            <li>Các thông tin về cookies trên trình duyệt.</li>
                        </ul>

                        <h3>1.2. Các thông tin được thu thập tự động khi sử dụng dịch vụ  </h3>
                        <p>
                            Bao gồm các thông tin khi bạn duyệt trang web của chúng tôi và thực hiện một số hành động
                            nhất định khi sử dụng dịch vụ. Cụ thể: - Thông tin về việc sử dụng dịch vụ: Chúng tôi ghi
                            lại một số thông tin nhất định khi bạn truy cập và tương tác với bất kỳ dịch vụ nào của
                            chúng tôi. Thông tin này bao gồm các tính năng bạn sử dụng; các liên kết bạn nhấp vào; thông
                            tin về tài liệu bạn tải lên (loại, kích thước và nội dung tệp đính kèm); các từ tìm
                            kiếm; tiến trình thực hiện các mục tiêu của nhóm; và cách bạn tương tác với những người khác
                            trên dịch vụ. Chúng tôi cũng thu thập thông tin về các nhóm và những người bạn làm việc cùng
                            cũng như cách bạn làm việc với họ, ví dụ những người mà bạn cộng tác và liên lạc thường
                            xuyên nhất. Nếu bạn sử dụng phiên bản máy chủ hoặc trung tâm dữ liệu của riêng mình, chúng
                            tôi sẽ không thu thập thông tin, trừ phi bạn cung cấp cho chúng tôi.
                        </p>
                        <h3>1.3. Thông tin nhận được từ các nguồn khác</h3>
                        <p>
                            Chúng tôi có thể nhận được thông tin về bạn từ những người dùng dịch vụ khác, từ các dịch vụ
                            của bên thứ ba, từ các công ty liên quan, từ các nền tảng mạng xã hội, từ cơ sở dữ liệu công
                            khai cũng như từ các đối tác kinh doanh và kênh của chúng tôi. Chúng tôi có thể kết hợp
                            thông tin này với thông tin mà chúng tôi thu thập qua các phương tiện được mô tả ở
                            trên. Điều này giúp chúng tôi cập nhật và cải thiện hồ sơ của khách hang, tìm kiếm khách
                            hàng mới, tạo quảng cáo cá nhân hóa hơn và đề xuất các dịch vụ mà bạn có thể quan tâm.
                        </p>

                        <h2>II. CÁCH THÔNG TIN ĐÃ THU THẬP ĐƯỢC SỬ DỤNG</h2>
                        <p>
                            Cách chúng tôi sử dụng thông tin thu thập được phụ thuộc vào một phần dịch vụ bạn sử dụng,
                            cách bạn sử dụng chúng và các tùy chọn mà bạn đã thông báo cho chúng tôi. Dưới đây là các
                            mục đích cụ thể của việc sử dụng thông tin thu thập được:
                        </p>
                        <ul>
                            <li>
                                Để cung cấp dịch vụ và trải nghiệm cá nhân hóa của bạn - Cơ sở cho nghiên cứu và phát
                                triển - Để liên hệ với bạn về Dịch vụ 
                            </li>
                            <li>Để tiếp tục, quảng bá và cung cấp sự tương tác với Dịch vụ</li>
                            <li>Để hỗ trợ khách hàng tốt hơn</li>
                            <li>Vì sự an toàn và bảo mật</li>
                            <li>Để bảo vệ lợi ích kinh doanh hợp pháp và quyền lợi hợp pháp của chúng tô</li>
                        </ul>
                        <h2>III.THÔNG TIN ĐƯỢC CUNG CẤP RA BÊN NGOÀI NHƯ THẾ NÀO</h2>
                        <p>
                            Chúng tôi tạo ra các công cụ cộng đồng và chúng tôi muốn chúng hoạt động hiệu quả cho
                            bạn. Điều này có nghĩa là thông tin của bạn khi sử dụng dịch vụ có thể được cung cấp cho một
                            số bên thứ ba nhất định, nhưng luôn tuân thủ đúng pháp luật, cụ thể như sau:
                        </p>
                        <h3>3.1. Cung cấp cho người dùng dịch vụ khác</h3>
                        <p>
                            Khi bạn sử dụng dịch vụ, một số thông tin nhất định có thể được cung cấp cho những người
                            dùng dịch vụ khác.
                        </p>
                        <ul>
                            <li>
                                Để hợp tác: Bạn có thể tạo nội dung có thể chứa thông tin về bạn và cấp quyền cho người
                                khác xem, tiết lộ, chỉnh sửa, sao chép và tải xuống nội dung đó dựa trên cài đặt mà bạn
                                hoặc người quản trị của bạn quản lý (nếu có) lựa chọn
                            </li>
                            <li>
                                Cho các tài khoản có quyền quản lý và quản trị viên: Nếu bạn là thành viên của một tổ
                                chức, và tổ chức sử dụng dịch vụ của chúng tôi, thì các cá nhân quản lý của tổ chức đó
                                có thể biết được một số thông tin nhất định về bạn.
                            </li>
                            <li>
                                Cho diễn đàn cộng đồng: Trang web của chúng tôi có thể cung cấp các blog, diễn đàn. Vì
                                vậy bạn nên biết rằng bất kỳ thông tin nào bạn đăng trên trang web này - bao gồm hồ sơ
                                thông tin được liên kết với tài khoản bạn sử dụng để đăng thông tin - có thể được đọc,
                                thu thập và sử dụng bởi bất kỳ thành viên của trang web này. Các bài đăng và thông tin
                                hồ sơ cơ bản của bạn vẫn còn ngay cả khi bạn đóng tài khoản của mình. Chúng tôi khuyên
                                bạn nên xem xét tính nhạy cảm của bất kỳ thông tin nào bạn nhập vào dịch vụ này. Để yêu
                                cầu xóa thông tin của bạn khỏi các trang web có thể truy cập công khai do chúng tôi điều
                                hành, vui lòng liên hệ với chúng tôi theo thông tin bên dưới. Trong một số trường hợp,
                                chúng tôi không thể xóa thông tin của bạn, trong những trường hợp hợp lý, chúng tôi sẽ
                                cho bạn biết nếu không xóa được và tại sao.
                            </li>
                        </ul>
                        <h3>3.2. Cung cấp cho bên thứ ba</h3>
                        <p>
                            Chúng tôi cung cấp thông tin cho một số bên thứ ba để giúp vận hành, cung cấp, cải tiến,
                            tích hợp, tùy chỉnh, hỗ trợ và tiếp thị các dịch vụ của chúng tôi.
                        </p>
                        <ul>
                            <li>
                                Cho nhà cung cấp dịch vụ: Chúng tôi làm việc với các nhà cung cấp dịch vụ thứ ba để cung
                                cấp dịch vụ phát triển trang web và ứng dụng, lưu trữ, bảo trì, sao lưu, lưu trữ, cơ sở
                                hạ tầng ảo hóa, xử lý thanh toán, phân tích, tiếp thị và các dịch vụ khác cho chúng tôi,
                                những dịch vụ này có thể yêu cầu truy cập hoặc sử dụng thông tin về bạn. Nếu nhà cung
                                cấp dịch vụ cần truy cập thông tin về bạn để thực hiện các dịch vụ thay cho chúng tôi,
                                họ sẽ thực hiện tuân theo các thủ tục bảo mật để bảo vệ thông tin của bạn.
                            </li>
                            <li>
                                Cho đối tác của Tinasoft: Chúng tôi làm việc với các bên thứ ba cung cấp các dịch vụ tư
                                vấn, bán hàng, hỗ trợ và kỹ thuật để đem lại và triển khai các giải pháp cho khách hàng
                                sử dụng dịch vụ của chúng tôi. Chúng tôi có thể cung cấp thông tin của bạn cho các bên
                                thứ ba liên quan đến dịch vụ của họ, ví dụ như hỗ trợ thanh toán và thu tiền, để cung
                                cấp hỗ trợ cục bộ và các tùy chỉnh. Chúng tôi cũng có thể cung cấp thông tin cho các bên
                                thứ ba mà bạn đã đồng ý.
                            </li>
                            <li>
                                Cho ứng dụng của bên thứ ba: Bạn, quản trị viên của bạn hoặc những người dùng dịch vụ
                                khác có thể chọn thêm chức năng mới hoặc thay đổi hoạt động của dịch vụ bằng cách cài
                                đặt ứng dụng của bên thứ ba trong dịch vụ. Do đó, bạn có thể cung cấp các ứng dụng của
                                quyền truy cập thứ ba vào tài khoản của bạn và thông tin về bạn như tên và email địa chỉ
                                cũng như bất kỳ nội dung nào bạn chọn sử dụng liên kết đến các ứng dụng sử dụng
                                chúng. Chúng tôi không kiểm soát các chính sách và quy trình của ứng dụng bên thứ ba và
                                chính sách riêng tư này không đề cập đến cách sử dụng thông tin của bạn ở bên thứ ba.
                                Chúng tôi khuyến khích bạn tìm hiểu kỹ chính sách quyền riêng tư của bên thứ ba trước
                                khi kết nối hoặc sử dụng ứng dụng hoặc dịch vụ của họ. Nếu bạn phản đối thông tin về
                                việc bạn được tiết lộ ở các bên thứ ba này, vui lòng gỡ cài đặt ứng dụng.
                            </li>
                            <li>
                                Cho liên kết đến các trang web bên thứ ba: Dịch vụ có thể bao gồm các liên kết hướng dẫn
                                bạn đến các trang web hoặc dịch vụ khác. Nếu bạn gửi thông tin đến bất kỳ trang web nào
                                của bên thứ ba, thông tin của bạn sẽ chịu sự điều chỉnh về chính sách riêng tư của họ
                                chứ không phải chính sách này. Chúng tôi khuyến khích bạn đọc kỹ chính sách riêng tư của
                                bất kỳ trang web nào bạn truy cập.
                            </li>
                        </ul>
                        <h2>IV. CÁC THÔNG TIN KHÁC VỀ QUYỀN RIÊNG TƯ</h2>
                        <h3>4.1. Thông báo tới người dùng cuối</h3>
                        <p>
                            Sản phẩm của chúng tôi được thiết kế để các tổ chức sử dụng. Khi dịch vụ được cung cấp cho
                            bạn thông qua một tổ chức (Ví dụ: Công ty chủ lao động của bạn), tổ chức đó là quản trị viên
                            của một dịch vụ và chịu trách nhiệm về các tài khoản và/hoặc trang web dịch vụ tổ chức đó có
                            quyền kiểm soát. Trong trường hợp này, vui lòng gửi câu hỏi về quyền riêng tư dữ liệu của
                            bạn cho người quản trị viên của tổ chức đó. Chúng tôi không chịu trách nhiệm về các biện
                            pháp bảo mật hoặc quyền riêng tư của tổ chức đó.
                        </p>
                        <p>Người quản trị có thể:</p>

                        <ul>
                            <li>Yêu cầu bạn đặt lại tài khoản mật khẩu của mình;</li>
                            <li>Hạn chế, đình chỉ hoặc chấm dứt quyền truy cập của bạn vào dịch vụ;</li>
                            <li>Truy cập thông tin trong và về tài khoản của bạn;</li>
                            <li>Truy cập hoặc lưu thông tin được lưu trữ như một phần tài khoản của bạn;</li>
                            <li></li>
                        </ul>
                        <p>
                            Cài đặt hoặc cài đặt ứng dụng của bên thứ ba hoặc các tiện ích khác. Trong một số trường
                            hợp, quản trị viên cũng có thể:
                        </p>
                        <ul>
                            <li>Hạn chế, đình chỉ hoặc chấm dứt quyền truy cập tài khoản của bạn;</li>
                            <li>Thay đổi địa chỉ email được liên kết với tài khoản của bạn;</li>
                            <li>
                                Thay đổi thông tin của bạn, bao gồm hồ sơ thông tin; - Hạn chế khả năng sửa đổi hoặc xóa
                                thông tin của bạn.
                            </li>
                        </ul>
                        <h3>4.2. Chính sách của chúng tôi đối với trẻ em</h3>

                        <p>
                            Dịch vụ không hướng tới các cá nhân dưới 18 tuổi. Chúng tôi không thu thập thông tin cá nhân
                            từ trẻ em dưới 18 tuổi. Nếu chúng tôi biết rằng một trẻ em dưới 18 tuổi đã cung cấp cho
                            chúng tôi thông tin cá nhân, chúng tôi sẽ thực hiện các bước để xóa thông tin đó. Nếu bạn
                            biết rằng một trẻ em đã cung cấp cho chúng tôi thông tin cá nhân, vui lòng liên hệ với chúng
                            tôi.
                        </p>
                        <h3>4.3. Những thay đổi đối với chính sách riêng tư</h3>
                        <p>
                            Khi cần chúng tôi có thể thay đổi chính sách riêng tư này. Chúng tôi sẽ đăng các thay đổi về
                            chính sách quyền riêng tư trên trang này và nếu những thay đổi đó quan trọng, chúng tôi sẽ
                            cho thông báo trên trang chủ dịch vụ, trên màn hình đăng nhập hoặc bằng cách gửi cho bạn qua
                            email. Chúng tôi cũng lưu trữ các phiên bản trước của chính sách quyền riêng tư này để bạn
                            xem xét. Chúng tôi khuyến khích bạn xem lại chính sách quyền riêng tư của chúng tôi bất cứ
                            khi nào bạn sử dụng dịch vụ để bảo vệ quyền riêng tư của chính mình.
                        </p>
                        <p>
                            Nếu bạn không đồng ý với bất kỳ thay đổi nào đối với chính sách quyền riêng tư này, bạn có
                            thể ngừng sử dụng dịch vụ và đóng tài khoản của mình.
                        </p>
                        <h4>Liên hệ:</h4>
                        <p>Thông tin của bạn được kiểm soát bởi Tinasoft Việt Nam.</p>
                        <ul>
                            <li>
                                Địa chỉ:
                                <strong>Tầng 4, Ellipse Tower, 110 đường Trần Phú, Hà Đông, Hà Nội, Việt Nam</strong>
                            </li>
                            <li>
                                Email:<strong>contact@tinasoft.vn</strong>
                            </li>
                            <li>
                                Website:<strong>https://tinasoft.vn</strong>
                            </li>
                            <li>
                                Phone:<strong>0246 329 5589</strong>
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="absolute top-1/2">
                <Image alt="" src={images.mapBase.default.src} preview={false} />
            </div>
        </div>
    );
};

export default page;
