import { Form, Modal, Image, Row, Col, Input, Select } from 'antd';
import { handleHideCreateWorkspaceForm } from '@/redux/state/modalCreateWorkspaceSlice';
import { useSelector, useDispatch } from 'react-redux';
import images from '@/assets/images';
import { CameraFilled } from '@ant-design/icons';
import './CreateWorkspaceForm.css';

const CustomModal = () => {
    const dispatch = useDispatch();
    const showModal = useSelector((state: any) => state.modal.modalVisible);

    type FieldType = {
        workspaceName?: string;
        companyType?: string;
        phoneNumber?: string;
        website?: string;
        email?: string;
        staff?: string;
    };

    return (
        <Modal
            title={null}
            centered
            footer={null}
            open={showModal}
            closeIcon={false}
            // onOk={() => dispatch(handleHideCreateWorkspaceForm())} --> handle submit
            onCancel={() => dispatch(handleHideCreateWorkspaceForm())}
            className="modal-portal z-[1001] modal-add-new-company-wrapper"
            width={796}
        >
            <div className="container-add-new">
                <div className="form-bg-avatar">
                    <div className="inline-block relative top-[62px] pl-10">
                        <label htmlFor="photoFile">
                            <Image
                                alt="Ảnh đại diện"
                                className="rounded-full border-2 border-solid border-white cursor-pointer"
                                src={images.uploadAvatar.default.src}
                                style={{ width: 202, height: 202, objectFit: 'cover' }}
                                preview={false}
                            />
                            <CameraFilled className="icon-update-avatar" />
                            <input
                                name="photoFile"
                                type="file"
                                id="photoFile"
                                accept="image/png, image/jpg, image/jpeg"
                                className="hidden"
                            />
                        </label>
                    </div>
                </div>
                <Form layout="horizontal" className="form-add-new-company">
                    <div className="title-modal">Hãy xây dựng một không gian làm việc mới</div>
                    <div className="description-modal">
                        Tăng năng suất công việc một cách tối đa nhất giúp mọi người dễ dàng truy cập cùng nhau.
                    </div>
                    <Row>
                        <Col span={12} style={{ paddingLeft: '8px', paddingRight: '8px' }}>
                            <div className="form-item-custom">
                                <div className="title">
                                    Tên không gian làm việc
                                    <b className="text-orange-300">*</b>
                                </div>

                                <Form.Item<FieldType>
                                    name="workspaceName"
                                    validateTrigger="onBlur"
                                    rules={[{ required: true, message: 'Tên không gian làm việc không được để trống' }]}
                                >
                                    <Input
                                        placeholder="Tên không gian làm việc"
                                        className="input-formik-global undefined"
                                    />
                                </Form.Item>
                            </div>
                            <div className="form-item-custom">
                                <div className="title">
                                    Loại hình không gian làm việc
                                    <b className="text-orange-300">*</b>
                                </div>

                                <Form.Item name="companyType">
                                    <Select
                                        showSearch
                                        className="select-formik-global undefined ant-select-single ant-select-show-arrow ant-select-show-search"
                                        defaultValue="Công ty"
                                        options={[
                                            { label: 'Công ty', value: 'company' },
                                            { label: 'Tổ chức', value: 'organization' },
                                        ]}
                                    />
                                </Form.Item>
                            </div>

                            <div className="form-item-custom">
                                <div className="title">
                                    Số điện thoại
                                    <b className="text-orange-300">*</b>
                                </div>

                                <Form.Item
                                    name="phoneNumber"
                                    validateTrigger="onBlur"
                                    rules={[{ required: true, message: 'Số điện thoại không được để trống' }]}
                                >
                                    <Input placeholder="Số điện thoại" className="input-formik-global undefined" />
                                </Form.Item>
                            </div>
                        </Col>
                        <Col span={12} style={{ paddingLeft: '8px', paddingRight: '8px' }}>
                            <div className="form-item-custom">
                                <div className="title">Website</div>

                                <Form.Item name="website">
                                    <Input placeholder="Website" className="input-formik-global undefined" />
                                </Form.Item>
                            </div>

                            <div className="form-item-custom">
                                <div className="title">Email</div>

                                <Form.Item name="email">
                                    <Input placeholder="Email" className="input-formik-global undefined" />
                                </Form.Item>
                            </div>
                            <div className="form-item-custom">
                                <div className="title">
                                    Quy mô nhân sự
                                    <b className="text-orange-300">*</b>
                                </div>

                                <Form.Item
                                    name="staffSize"
                                    validateTrigger="onBlur"
                                    rules={[{ required: true, message: 'Quy mô nhân sự không được để trống' }]}
                                >
                                    <Select
                                        showSearch
                                        className="select-formik-global undefined ant-select-single ant-select-show-arrow ant-select-show-search"
                                        placeholder="Quy mô nhân sự"
                                        options={[
                                            { label: 'Nhỏ hơn 50 nhân sự', value: 'small' },
                                            { label: 'Từ 50 đến 100 nhân sự', value: 'medium' },
                                            { label: 'Lớn hơn 100 nhân sự', value: 'large' },
                                        ]}
                                    />
                                </Form.Item>
                            </div>
                        </Col>
                    </Row>
                    <div className="flex justify-end items-center gap-x-1.5 pt-1">
                        <button
                            onClick={() => dispatch(handleHideCreateWorkspaceForm())}
                            className="p-2 inline-flex items-center justify-center rounded-md transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-[#ee4b4b] font-semibold text-base h-12 py-3 px-6"
                        >
                            Hủy
                        </button>
                        <button
                            onClick={() => dispatch(handleHideCreateWorkspaceForm())}
                            className="p-2 inline-flex items-center justify-center rounded-md transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-[#2082ff] font-semibold text-base h-12 py-3 px-6"
                            type="submit"
                        >
                            Tạo không gian làm việc
                        </button>
                    </div>
                </Form>
            </div>
        </Modal>
    );
};

export default CustomModal;
