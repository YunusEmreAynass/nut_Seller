    <?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require '../PHPMailer/src/Exception.php';
    require '../PHPMailer/src/PHPMailer.php';
    require '../PHPMailer/src/SMTP.php';
    if ($_POST) {
        $isim = $_POST['isim'];
        $soyisim = $_POST['soyisim'];
        $email = $_POST['mail'];
        $mesaj = $_POST['mesaj'];

        $icerik = "<meta charset='UTF-8'><h2>Yeni E-mail</h2>";
        $icerik .= "İletici İsim Soyisim: " . $isim . " " . $soyisim . "<br>";
        $icerik .= $mesaj;


        $mail = new PHPMailer();
        $mail->setLanguage("tr", "phpmailer/language");
        $mail->charSet = "utf-8";
        $mail->encoding = "base64";
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username = "yunusemreaynas@gmail.com"; //bu bir php mailer oluşturmak için oluşturduğumuz bir hesap
        $mail->Password = "fege gozq ulqx vsav"; //uygulama şifresi
        $mail->SMTPSecure = "tls";
        $mail->Port = 587;
        $mail->Subject = "Feedback";

        try {
            $mail->setFrom($email, $isim); //mail kimden gidicek
        } catch (Exception $e) {
        }

        try {
            $mail->addAddress("yunusemreaynas@gmail.com"); //kime gidicek istediğin hesapları eklicen 
            $mail->addReplyTo($email, $isim); //kullanıcı geri dönüş yapınca cevap vericek hesap , 2. parametre ise mailin konusudur genelde
        } catch (Exception $e) {
        }

        $mail->isHTML(true);
        $mail->Body = $icerik;

        try {
            if ($mail->send()) {
                echo '<h1>Mesajınız iletildi</h1>';
            } else {
                echo 'Mesajınız iletilemedi lütfen tekrar deneyiniz.';
            }
        } catch (Exception $e) {
        }
    } else {
        echo "egvfdsv";
    }
    ?>


