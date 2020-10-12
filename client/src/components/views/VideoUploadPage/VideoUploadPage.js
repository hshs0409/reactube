import React, { useState } from "react";
import Form from "antd/lib/form/Form";
import { Input, Button, Select } from "antd";
import Title from "antd/lib/typography/Title";
import Dropzone from "react-dropzone";
import { PlusOutlined } from "@ant-design/icons";

const CategoryOptions = [
  { value: 0, label: "Film & Animations" },
  { value: 1, label: "Review" },
  { value: 2, label: "MukBang" },
  { value: 3, label: "Sports" },
  { value: 4, label: "Vlog" },
  { value: 5, label: "Music" },
];

const PrivateOptions = [
  { value: 0, label: "Private" },
  { value: 1, label: "Public" },
];

const { Option } = Select;

function VideoUploadPage() {
  const [videoTitle, setVideoTitle] = useState("");
  const [description, setDescription] = useState("");
  const [Private, setPrivate] = useState(0);
  const [category, setCategory] = useState("Film & Animations");

  const onChangeTitle = (event) => {
    setVideoTitle(event.currentTarget.value);
  };
  const onChangeDescription = (event) => {
    setDescription(event.currentTarget.value);
  };
  const onChangePrivate = (value) => {
    setPrivate(value);
  };
  const onChangeCategory = (value) => {
    setCategory(value);
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "2rem auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={1}>Upload Video</Title>
      </div>
      <Form onSubmit>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Dropzone
            onDrop={(acceptedFiles) => console.log(acceptedFiles)}
            multiple
            maxSize
          >
            {({ getRootProps, getInputProps }) => (
              <section>
                <div
                  style={{
                    width: "300px",
                    height: "240px",
                    border: "1px solid lightgray",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  <PlusOutlined
                    style={{
                      fontSize: "4rem",
                    }}
                  />
                </div>
              </section>
            )}
          </Dropzone>
          {/* Thumbnail */}
          <div>
            <img src alt="Upload Image"></img>
          </div>
        </div>

        <br />
        <br />
        <label>Title</label>
        <Input type="text" value={videoTitle} onChange={onChangeTitle}></Input>
        <br />
        <br />
        <label>Description</label>
        <Input.TextArea
          value={description}
          onChange={onChangeDescription}
        ></Input.TextArea>
        <br />
        <br />

        <Select defaultValue="Private" onChange={onChangePrivate}>
          {PrivateOptions.map((item, index) => (
            <Option key={index} value={item.value}>
              {item.label}
            </Option>
          ))}
        </Select>
        <br />
        <br />

        <Select
          defaultValue="Film & Animations"
          style={{ width: 160 }}
          onChange={onChangeCategory}
        >
          {CategoryOptions.map((item, index) => (
            <Option key={index} value={item.value}>
              {item.label}
            </Option>
          ))}
        </Select>
        <br />
        <br />

        <Button type="primary" size="large" onClick>
          Upload
        </Button>
      </Form>
    </div>
  );
}

export default VideoUploadPage;
