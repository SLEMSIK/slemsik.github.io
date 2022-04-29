var data_c1
var data_c2 
var data_c3
var data_c4
var data_c5
var count = 0;
var button = document.querySelector(".b1");
  button.addEventListener("click", function() {
    var name = document.querySelector(".i1").value;
    console.log(name)
    var data = confirm("Проверь данные: " + name + " нажми <ок> если всё так")
    if(data){
        //отправляем данные учителю
        olimp()
    }else{
        alert("Заного введите правельные данные в поле и повторно нажмите кнопку")
        //ждём пока человек введёт правельные данные
    }
})
function olimp(){
    document.querySelector(".b1").disabled = true; 
    var c1 = Math.round(Math.random()*4 + 1)
    var c2 = Math.round(Math.random()*4 + 1)
    var c3 = Math.round(Math.random()*4 + 1)
    var c4 = Math.round(Math.random()*4 + 1)
    var c5 = Math.round(Math.random()*4 + 1)
    console.log(c1)
    console.log(c2)
    console.log(c3)
    console.log(c4)
    console.log(c5)
    //1 вопрос
    if(c1 == 1){
        document.querySelector(".p1_1").innerHTML="1.Предками русских, украинцев и белорусов были:";
        document.querySelector(".p1_2").innerHTML="1) франки 2) германцы 3) восточные славяне 4) южные славяне";

        var button1 = document.querySelector(".b2");
        button1.addEventListener("click", function() {
          var name1 = document.querySelector(".i2").value;
          document.querySelector(".b2").disabled = true
          if(name1 == "1"){
            console.log("1")
            data_c1 = "c1_1_1"
        }
        if(name1 == "2"){
            console.log("2")
            data_c1 = "c1_1_2"
        }
        if(name1 == "3"){
            console.log("3")
            data_c1 = "c1_1_3"
            count = count + 1
            console.log(count);
        }
        if(name1 == "4"){
            console.log("4")
            data_c1 = "c1_1_4"
        }
      })
    } 
    if(c1 == 2){
        document.querySelector(".p1_1").innerHTML="1.Причиной создания Древнерусского государства была:";
        document.querySelector(".p1_2").innerHTML="1) появление местных княжений 2) общая военная угроза 3) развитие торговли";
        var button1 = document.querySelector(".b2");
        button1.addEventListener("click", function() {
          var name1 = document.querySelector(".i2").value;
          document.querySelector(".b2").disabled = true
          if(name1 == "1"){
            console.log("1")
            data_c1 = "c1_2_1"
        }
        if(name1 == "2"){
            console.log("2")
            count = count + 1
            data_c1 = "c1_2_2"
            
            
        }
        if(name1 == "3"){
            console.log("3")
            data_c1 = "c1_2_3"
        }
      })
    } 
    if(c1 == 3){
        document.querySelector(".p1_1").innerHTML="1.Какое событие «Повесть временных лет» относит к 862 г.?";
        document.querySelector(".p1_2").innerHTML="1) призвание Рюрика в Новгород на княжение 2) крещение князя Владимира 3) первый договор князя Олега с Византией 4) восстание древлян";
        var button1 = document.querySelector(".b2");
        button1.addEventListener("click", function() {
          var name1 = document.querySelector(".i2").value;
          document.querySelector(".b2").disabled = true
          if(name1 == "1"){
            console.log("1");
            data_c1 = "c1_3_1"
            
            count = count + 1
            console.log(count);
        }
        if(name1 == "2"){
            console.log("2")
            data_c1 = "c1_3_2"

        }
        if(name1 == "3"){
            console.log("3")
            data_c1 = "c1_3_3"
        }
        if(name1 == "4"){
            console.log("4")
            data_c1 = "c1_3_4"
        }
      })

    } 
    if(c1 == 4){
        document.querySelector(".p1_1").innerHTML="1.Укажите, какое из перечисленных имен не связано с легендой об основании Киева.";
        document.querySelector(".p1_2").innerHTML="1) Кий 2) Хорив 3) Рюрик 4) Щек";
        var button1 = document.querySelector(".b2");
        button1.addEventListener("click", function() {
          var name1 = document.querySelector(".i2").value;
          document.querySelector(".b2").disabled = true
          if(name1 == "1"){
            console.log("1")
            data_c1 = "c1_4_1"
            
        }
        if(name1 == "2"){
            console.log("2")
            data_c1 = "c1_4_2"
            
        }
        if(name1 == "3"){
            console.log("3")
            data_c1 = "c1_4_3"
            
            count = count + 1
            console.log(count);
        }
        if(name1 == "4"){
            console.log("4")
            data_c1 = "c1_4_4"
        }

      })
    } 
    if(c1 == 5){
        document.querySelector(".p1_1").innerHTML="2.Объезд князем и его дружины своих владений с осени до  весны:";
        document.querySelector(".p1_2").innerHTML="1) VIII в. 2) IXв. 3) X в. 4) XI в.";
        var button1 = document.querySelector(".b2");
        button1.addEventListener("click", function() {
          var name1 = document.querySelector(".i2").value;
          document.querySelector(".b2").disabled = true
          if(name1 == "1"){
            console.log("1")
            data_c1 = c1_5_1
        }
        if(name1 == "2"){
            console.log("2")
            data_c1 = c1_5_2
            count = count + 1
            console.log(count);
        }
        if(name1 == "3"){
            console.log("3")
            data_c1 = c1_5_3
        }
        if(name1 == "4"){
            console.log("4")
            data_c1 = c1_5_4
        }
      })
    } 
    //2 вопрос

    if(c2 == 1){
        document.querySelector(".p2_1").innerHTML="2.Объезд князем и его дружины своих владений с осени до  весны:";
        document.querySelector(".p2_2").innerHTML="1) полюдье  2) обход 3) повоз 4) ополчение";

        var button2 = document.querySelector(".b3");
        button2.addEventListener("click", function() {
          var name2 = document.querySelector(".i3").value;
          document.querySelector(".b3").disabled = true;
          if(name2 == "1"){
            console.log("1")
        }
        if(name2 == "2"){
            console.log("2")
        }
        if(name2 == "3"){
            console.log("3")
            count = count + 1
            
        }
        if(name2 == "4"){
            console.log("4")
        }
        
      })
    } 
    if(c2 == 2){
        document.querySelector(".p2_1").innerHTML="2.Первый свод письменных законов Древней Руси назывался:";
        document.querySelector(".p2_2").innerHTML="1) Русская Правда 2) Судебник 3) Урок Ярославичам 4) Соборное  Уложение";
        var button2 = document.querySelector(".b3");
        button2.addEventListener("click", function() {
          var name2 = document.querySelector(".i3").value;
          document.querySelector(".b3").disabled = true;
          if(name2 == "1"){
            console.log("1")
        }
        if(name2 == "2"){
            console.log("2")
            count = count + 1
            
        }
        if(name2 == "3"){
            console.log("3")
        }
        if(name2 == "4"){
            console.log("4")
        }
      })
    } 
    if(c2 == 3){
        document.querySelector(".p2_1").innerHTML="2.Первая известная летопись на Руси:";
        document.querySelector(".p2_2").innerHTML="1) «Слово о полку Игореве» 2) «Поучение Владимира Мономаха» 3) «Повесть временных лет» 4) «Повесть о разорении Рязани Батыем»";
        var button2 = document.querySelector(".b3");
        button2.addEventListener("click", function() {
          var name2 = document.querySelector(".i3").value;
          document.querySelector(".b3").disabled = true;
          if(name2 == "1"){
            console.log("1")
            count = count + 1
            
        }
        if(name2 == "2"){
            console.log("2")

        }
        if(name2 == "3"){
            console.log("3")

        }
        if(name2 == "4"){
            console.log("4")
    
        }
      })

    } 
    if(c2 == 4){
        document.querySelector(".p2_1").innerHTML="2.Убийство Бориса и Глеба произошло по приказу:";
        document.querySelector(".p2_2").innerHTML="1) Ярослава I Мудрого 2) Святослава Черниговского 3) Святослава I Окаянного";
        var button2 = document.querySelector(".b4");
        button2.addEventListener("click", function() {
          var name2 = document.querySelector(".i3").value;
          document.querySelector(".b3").disabled = true;
          if(name2 == "1"){
            console.log("1")
            
        }
        if(name2 == "2"){
            console.log("2")
            
        }
        if(name2 == "3"){
            console.log("3")
            count = count + 1
            
        }

      })
    } 
    if(c2 == 5){
        document.querySelector(".p2_1").innerHTML="2.К причинам распада Древнерусского государства в XII веке не относится";
        document.querySelector(".p2_2").innerHTML="1) сложившийся в Древнерусском государстве порядок управления 2) отсутствие твёрдого и определённого порядка наследования киевского престола";
        document.querySelector(".p2_3").innerHTML="3) действие единого свода древнерусских законов – Русской Правды 4) изменения в хозяйственной жизни страны";
        var button2 = document.querySelector(".b3");
        button2.addEventListener("click", function() {
          var name2 = document.querySelector(".i3").value;
          document.querySelector(".b3").disabled = true;
          if(name2 == "1"){
            console.log("1")
        }
        if(name2 == "2"){
            console.log("2")
            count = count + 1
            
        }
        if(name2 == "3"){
            console.log("3")
        }
        if(name2 == "4"){
            console.log("4")
        }
      })
    } 
    //3 вопрос
    if(c3 == 1){
        document.querySelector(".p3_1").innerHTML="3.Тип государственного устройства, который предполагает широкое участие населения в делах управления посредством веча.";
        document.querySelector(".p3_2").innerHTML="1) Монархия с большой ролью боярства в жизни общества (сословная монархия) 2) Монархия с главенствующей ролью князя (абсолютная монархия) 3)Боярская республика с решающей ролью вече";

        var button3 = document.querySelector(".b4");
        button3.addEventListener("click", function() {
          var name3 = document.querySelector(".i4").value;
          document.querySelector(".b4").disabled = true;
          if(name3 == "1"){
            console.log("1")
        }
        if(name3 == "2"){
            console.log("2")
        }
        if(name3 == "3"){
            console.log("3")
            count = count + 1
        }
        
      })
    } 
    if(c3 == 2){
        document.querySelector(".p3_1").innerHTML="3.Период феодальной раздробленности характеризуется :";
        document.querySelector(".p3_2").innerHTML="1) обособлением земель-княжеств; 2) упадком городов и торговли; 3) интенсивным развитием сельского хозяйства; 4) укреплением обороноспособности княжеств";
        var button3 = document.querySelector(".b4");
        button3.addEventListener("click", function() {
          var name3 = document.querySelector(".i4").value;
          document.querySelector(".b4").disabled = true;
          if(name3 == "1"){
            console.log("1")
        }
        if(name3 == "2"){
            console.log("2")
            count = count + 1
        }
        if(name3 == "3"){
            console.log("3")
        }
        if(name3 == "4"){
            console.log("4")
    
        }
      })
    } 
    if(c3 == 3){
        document.querySelector(".p3_1").innerHTML="3.Прозвище «Тёмный» в истории получил московский правитель";
        document.querySelector(".p3_2").innerHTML="1) Василий I 2) Иван I 3) Василий II 4) Иван III";
        var button3 = document.querySelector(".b4");
        button3.addEventListener("click", function() {
          var name3 = document.querySelector(".i4").value;
          document.querySelector(".b4").disabled = true;
          if(name3 == "1"){
            console.log("1")
            count = count + 1
        }
        if(name3 == "2"){
            console.log("2")

        }
        if(name3 == "3"){
            console.log("3")

        }
        if(name3 == "4"){
            console.log("4")
    
        }
      })

    } 
    if(c3 == 4){
        document.querySelector(".p3_1").innerHTML="3.В результате Куликовской битвы:";
        document.querySelector(".p3_2").innerHTML="1) возросла роль Москвы как центра объединения русских земель 2) была уничтожена Золотая Орда 3) Русь попала в зависимость от Казанского ханства 4) усилилась зависимость Руси от Золотой Орды";
        var button3 = document.querySelector(".b4");
        button3.addEventListener("click", function() {
          var name3 = document.querySelector(".i4").value;
          document.querySelector(".b4").disabled = true;
          if(name3 == "1"){
            console.log("1")
            count = count + 1
        }
        if(name3 == "2"){
            console.log("2")
            
        }
        if(name3 == "3"){
            console.log("3")
            
        }
        if(name3 == "4"){
            console.log("4")
        }

      })
    } 
    if(c3 == 5){
        document.querySelector(".p3_1").innerHTML="3.Прозвище Невский князь Александр Ярославович получил за:";
        document.querySelector(".p3_2").innerHTML="1) проведение переписи населения в Новгороде 2) поездку к хану Орды за ярлыком 3) победу над ордынцами 4) разгром шведского отряда";
        var button3 = document.querySelector(".b4");
        button3.addEventListener("click", function() {
          var name3 = document.querySelector(".i4").value;
          document.querySelector(".b4").disabled = true;
          if(name3 == "1"){
            console.log("1")
        }
        if(name3 == "2"){
            console.log("2")
            count = count + 1
        }
        if(name3 == "3"){
            console.log("3")
        }
        if(name3 == "4"){
            console.log("4")
        }
      })
    }

    //4 вопрос
    if(c4 == 1){
        document.querySelector(".p4_1").innerHTML="4.Ордынские чиновники, которые собирали дань:";
        document.querySelector(".p4_3").innerHTML="1) бесермены 2) беки 3) баскаки 4) эмиры";

        var button4 = document.querySelector(".b5");
        button4.addEventListener("click", function() {
          var name4 = document.querySelector(".i5").value;
          document.querySelector(".b5").disabled = true;
          if(name4 == "1"){
            console.log("1")
        }
        if(name4 == "2"){
            console.log("2")
        }
        if(name4 == "3"){
            console.log("3")
            count = count + 1
        }
        if(name4 == "4"){
            console.log("4")
        }
        
      })
    } 
    if(c4 == 2){
        document.querySelector(".p4_1").innerHTML="4.Духовный лидер, от которого Дмитрий Иванович получил благословление накануне Куликовской битвы:";
        document.querySelector(".p4_3").innerHTML="1) Сергий Радонежский 2) митрополит Петр 3) митрополит Алексий 4) патриарх Никон";
        var button4 = document.querySelector(".b5");
        button4.addEventListener("click", function() {
          var name4 = document.querySelector(".i5").value;
          document.querySelector(".b5").disabled = true;
          if(name4 == "1"){
            console.log("1")
        }
        if(name4 == "2"){
            console.log("2")
            count = count + 1
        }
        if(name4 == "3"){
            console.log("3")
        }
        if(name4 == "4"){
            console.log("4")
    
        }
      })
    } 
    if(c4 == 3){
        document.querySelector(".p4_1").innerHTML="4.Князь, в правление которого Москва становится центром Русской православной церкви:";
        document.querySelector(".p4_3").innerHTML="1) Иван Калита 2) Дмитрий Донской 3) Александр Невский";
        var button4 = document.querySelector(".b5");
        button4.addEventListener("click", function() {
          var name4 = document.querySelector(".i5").value;
          document.querySelector(".b5").disabled = true;
          if(name4 == "1"){
            console.log("1")
            count = count + 1
        }
        if(name4 == "2"){
            console.log("2")

        }
        if(name4 == "3"){
            console.log("3")

        }
      })

    } 
    if(c4 == 4){
        document.querySelector(".p4_1").innerHTML="4.Прочтите отрывок из источника и укажите век, когда произошли описанные события.";
        document.querySelector(".p4_3").innerHTML="Это сражение произошло на льду озера. Враги были хорошо вооружены и были уверены в своей победе, но хитростью их удалось заманить на лед. Мужественно сражались русские воины и разгромили врага. Много было убито, взято в плен, а часть врагов ушла под тяжестью своих доспехов под лед.";
        document.querySelector(".p4_2").innerHTML="1) XII в. 2) XIII в. 3) XIV в. 4) XV в.";
        var button4 = document.querySelector(".b5");
        button4.addEventListener("click", function() {
          var name4 = document.querySelector(".i5").value;
          document.querySelector(".b5").disabled = true;
          if(name == "1"){
            console.log("1")
            
        }
        if(name4 == "2"){
            console.log("2")
            count = count + 1
        }
        if(name4 == "3"){
            console.log("3")
            
        }
        if(name4 == "4"){
            console.log("4")
        }

      })
    } 
    if(c4 == 5){
        document.querySelector(".p4_1").innerHTML="4.Река, на берегу которой произошло стояние войска Ивана III и Ахмата:";
        document.querySelector(".p4_3").innerHTML="1) Угра 2) Дон 3) Непрядва 4) Калка";
        var button4 = document.querySelector(".b5");
        button4.addEventListener("click", function() {
          var name4 = document.querySelector(".i5").value;
          document.querySelector(".b5").disabled = true;
          if(name4 == "1"){
            console.log("1")
        }
        if(name4 == "2"){
            console.log("2")
            count = count + 1
        }
        if(name4 == "3"){
            console.log("3")
        }
        if(name4 == "4"){
            console.log("4")
        }
      })
    }

    //5 вопрос
    if(c5 == 1){
        document.querySelector(".p5_1").innerHTML="5.Какое событие произошло позже всех?";
        document.querySelector(".p5_2").innerHTML="1) Первое упоминание о Москве 2) Крещение Руси 3) Ледовое побоище 4) Принятие первого Судебника единого государства 5) Нашествие Батыя на Русь";

        var button5 = document.querySelector(".b6");
        button5.addEventListener("click", function() {
          var name5 = document.querySelector(".i6").value;
          document.querySelector(".b6").disabled = true;
          if(name5 == "1"){
            console.log("1")
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }
        if(name5 == "2"){
            console.log("2")
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }
        if(name5 == "3"){
            console.log("3")
            count = count + 1
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }
        if(name5 == "4"){
            console.log("4")
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }
        if(name5 == "5"){
            console.log("5")
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
    
        }
        
      })
    } 
    if(c5 == 2){
        document.querySelector(".p5_1").innerHTML="5.Современниками были:";
        document.querySelector(".p5_2").innerHTML="А) Хан Мамай и Сергий Радонежский Б) Княгиня Ольга и Марфа Посадница В) Святослав и Цимисхий Г) Иван Калита и Тохтамыш";
        var button5 = document.querySelector(".b6");
        button5.addEventListener("click", function() {
          var name5 = document.querySelector(".i6").value;
          document.querySelector(".b6").disabled = true;
          if(name5 == "1"){
            console.log("1")
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }
        if(name5 == "2"){
            console.log("2")
            count = count + 1
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }
        if(name5 == "3"){
            console.log("3")
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }
        if(name5 == "4"){
            console.log("4")
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }
      })
    } 
    if(c5 == 3){
        document.querySelector(".p5_1").innerHTML="5.К зависимому населению на Руси относились (укажите все зависимые слои населения)";
        document.querySelector(".p5_2").innerHTML="А) бояре Б) закупы В) люди Г) холопы Д) рядовичи Е) челядь Ж) смерды";
        var button5 = document.querySelector(".b6");
        button5.addEventListener("click", function() {
          var name5 = document.querySelector(".i6").value;
          document.querySelector(".b6").disabled = true;
          if(name5 == "1"){
            console.log("1")
            count = count + 1
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }
        if(name5 == "2"){
            console.log("2")
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }
        if(name5 == "3"){
            console.log("3")
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }   
        if(name5 == "4"){
            console.log("4")
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }
        if(name5 == "5"){
            console.log("5")
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }
        if(name5 == "6"){
            console.log("6")
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }
        if(name5 == "7"){
            console.log("7")
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }
      })

    } 
    if(c5 == 4){
        document.querySelector(".p5_1").innerHTML="5.Кто лишний в этом ряду?";
        document.querySelector(".p5_2").innerHTML="А) Дмитрий Иванович Б) Владимир Андреевич В) Дмитрий Боброк Г) Нестор";
        var button5 = document.querySelector(".b6");
        button5.addEventListener("click", function() {
          var name5 = document.querySelector(".i6").value;
          document.querySelector(".b6").disabled = true;
          if(name5 == "1"){
            console.log("1")
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }
        if(name5 == "2"){
            console.log("2")
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }
        if(name5 == "3"){
            console.log("3")
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }
        if(name5 == "4"){
            console.log("4")
            count = count + 1
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }

      })
    } 
    if(c5 == 5){
        document.querySelector(".p5_1").innerHTML="5.Ниже приведен перечень терминов. Все они, за исключением одного, обозначают занятия восточных славян. Найдите и укажите термин, выпадающий из этого ряда.";
        document.querySelector(".p5_2").innerHTML="А) Земледелие  Б) кочевое скотоводство В) охота Г) ремесло Д) рыболовство";
        var button5 = document.querySelector(".b6");
        button5.addEventListener("click", function() {
          var name5 = document.querySelector(".i6").value;
          document.querySelector(".b6").disabled = true;
          if(name5 == "1"){
            console.log("1")
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }
        if(name5 == "2"){
            console.log("2")
            count = count + 1
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }
        if(name5 == "3"){
            console.log("3")
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }
        if(name5 == "4"){
            console.log("4")
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }
        if(name5 == "5"){
            console.log("5")
            alert("Твоя оценка - " + count + " отправь данный код учителю - " + id+"&"+data_c1+"&"+data_c2+"&"+data_c3+"&"+data_c4+"&"+data_c5)
        }
      })
    }
}

var id = document.querySelector(".i1").value;
