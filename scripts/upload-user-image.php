<?php

  if (isset($_POST) && isset($_FILES) && !empty($_FILES['user_image'])) {
    $user_id = $_POST['user_id'];
    /* name | tmp_name | size | error | type */
    $user_image = $_FILES['user_image'];

    $file_extension = explode('.', $user_image['name']);
    $file_real_extension = strtolower(end($file_extension));

    $allowed_to_upload = array('jpg', 'jpeg', 'png', 'gif');
    /* Check for allowed extension file */
    if (in_array($file_real_extension, $allowed_to_upload)) {
      if ($user_image['error'] == 0) {
        if ($user_image['size'] < 100000000) {
          $new_file_name = uniqid().'.'.$file_real_extension;
          $upload_file_path = 'media/uploads/'.$new_file_name;
          move_uploaded_file($user_image['tmp_name'], $upload_file_path);
          /* Updating user image in db */
          $link->__SQLUPDATE('users', 'user_image', $new_file_name);
          /* Redirect */
          header('Location: ./?nocache='.uniqid().'&upload=true');
          exit();
        } else {
          header('Location: ./?error=large-file-size?&upload=true');
        }
      } else {
        header('Location: ./?error=file-upload&upload=true');
      }
    } else {
      header('Location: ./?error=wrong-file-format&upload=true');
    }
  }

?>
