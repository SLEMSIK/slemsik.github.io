var count = 0;
var button = document.querySelector(".b1");
  button.addEventListener("click", function() {
    var name = document.querySelector(".i1").value;
    console.log(name)
    var data = confirm("Проверь данные: Имя и Фамилия - " + name + " нажми <Да> если всё так")
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
        document.querySelector(".p1_2").innerHTML="А) франки Б) германцы В) восточные славяне Г) южные славяне";

        var button = document.querySelector(".b2");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i2").value;
          if(name == "А"){
            console.log("A")
        }
        if(name == "Б"){
            console.log("Б")
        }
        if(name == "В"){
            console.log("В")
            document.querySelector(".count").innerHTML="Правельных ответов: 1";
            var q =1;
        }
        if(name == "Г"){
            console.log("Г")
        }
      })
    } 
    if(c1 == 2){
        document.querySelector(".p1_1").innerHTML="1.Причиной создания Древнерусского государства была:";
        document.querySelector(".p1_2").innerHTML="А) появление местных княжений Б) общая военная угроза В) развитие торговли";
        var button = document.querySelector(".b2");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i2").value;
          if(name == "А"){
            console.log("A")
        }
        if(name == "Б"){
            console.log("Б")
            count = count + 1
            document.querySelector(".count").innerHTML="Правельных ответов: 1";
            var q =1;
        }
        if(name == "В"){
            console.log("В")
        }
      })
    } 
    if(c1 == 3){
        document.querySelector(".p1_1").innerHTML="1.Какое событие «Повесть временных лет» относит к 862 г.?";
        document.querySelector(".p1_2").innerHTML="А) призвание Рюрика в Новгород на княжение Б) крещение князя Владимира В) первый договор князя Олега с Византией Г) восстание древлян";
        var button = document.querySelector(".b2");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i2").value;
          if(name == "А"){
            console.log("A");
            document.querySelector(".count").innerHTML="Правельных ответов: 1";
            var q =1;
        }
        if(name == "Б"){
            console.log("Б")

        }
        if(name == "В"){
            console.log("В")

        }
        if(name == "Г"){
            console.log("Г")
    
        }
      })

    } 
    if(c1 == 4){
        document.querySelector(".p1_1").innerHTML="1.Укажите, какое из перечисленных имен не связано с легендой об основании Киева.";
        document.querySelector(".p1_2").innerHTML="А) Кий Б) Хорив В) Рюрик Г) Щек";
        var button = document.querySelector(".b2");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i2").value;
          if(name == "А"){
            console.log("A")
            i++
        }
        if(name == "Б"){
            console.log("Б")
            i++
        }
        if(name == "В"){
            console.log("В")
            i++
        }
        if(name == "Г"){
            console.log("Г")
        }

      })
    } 
    if(c1 == 5){
        document.querySelector(".p1_1").innerHTML="2.Объезд князем и его дружины своих владений с осени до  весны:";
        document.querySelector(".p1_2").innerHTML="А) VIII в. Б) IXв. В) X в. Г) XI в.";
        var button = document.querySelector(".b2");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i2").value;
          if(name == "А"){
            console.log("A")
        }
        if(name == "Б"){
            console.log("Б")
            document.querySelector(".count").innerHTML="Правельных ответов: 1";
            var q =1;
        }
        if(name == "В"){
            console.log("В")
        }
        if(name == "Г"){
            console.log("Г")
        }
      })
    } 
    //2 вопрос

    if(c2 == 1){
        document.querySelector(".p2_1").innerHTML="2.Объезд князем и его дружины своих владений с осени до  весны:";
        document.querySelector(".p2_2").innerHTML="А) полюдье  Б) обход В) повоз Г) ополчение";

        var button = document.querySelector(".b3");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i3").value;
          if(name == "А"){
            console.log("A")
        }
        if(name == "Б"){
            console.log("Б")
        }
        if(name == "В"){
            console.log("В")
            i++
        }
        if(name == "Г"){
            console.log("Г")
        }
        
      })
    } 
    if(c2 == 2){
        document.querySelector(".p2_1").innerHTML="2.Первый свод письменных законов Древней Руси назывался:";
        document.querySelector(".p2_2").innerHTML="А) Русская Правда Б) Судебник В) Урок Ярославичам Г) Соборное  Уложение";
        var button = document.querySelector(".b3");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i3").value;
          if(name == "А"){
            console.log("A")
        }
        if(name == "Б"){
            console.log("Б")
            i++
        }
        if(name == "В"){
            console.log("В")
        }
        if(name == "Г"){
            console.log("Г")
        }
      })
    } 
    if(c2 == 3){
        document.querySelector(".p2_1").innerHTML="2.Первая известная летопись на Руси:";
        document.querySelector(".p2_2").innerHTML="А) «Слово о полку Игореве» Б) «Поучение Владимира Мономаха» В) «Повесть временных лет» Г) «Повесть о разорении Рязани Батыем»";
        var button = document.querySelector(".b3");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i3").value;
          if(name == "А"){
            console.log("A")
            i++
        }
        if(name == "Б"){
            console.log("Б")

        }
        if(name == "В"){
            console.log("В")

        }
        if(name == "Г"){
            console.log("Г")
    
        }
      })

    } 
    if(c2 == 4){
        document.querySelector(".p2_1").innerHTML="2.Убийство Бориса и Глеба произошло по приказу:";
        document.querySelector(".p2_2").innerHTML="А) Ярослава I Мудрого Б) Святослава Черниговского В) Святослава I Окаянного";
        var button = document.querySelector(".b4");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i3").value;
          if(name == "А"){
            console.log("A")
            i++
        }
        if(name == "Б"){
            console.log("Б")
            i++
        }
        if(name == "В"){
            console.log("В")
            i++
        }

      })
    } 
    if(c2 == 5){
        document.querySelector(".p2_1").innerHTML="2.К причинам распада Древнерусского государства в XII веке не относится";
        document.querySelector(".p2_2").innerHTML="А) сложившийся в Древнерусском государстве порядок управления Б) отсутствие твёрдого и определённого порядка наследования киевского престола";
        document.querySelector(".p2_3").innerHTML="В) действие единого свода древнерусских законов – Русской Правды Г) изменения в хозяйственной жизни страны";
        var button = document.querySelector(".b3");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i3").value;
          if(name == "А"){
            console.log("A")
        }
        if(name == "Б"){
            console.log("Б")
            i++
        }
        if(name == "В"){
            console.log("В")
        }
        if(name == "Г"){
            console.log("Г")
        }
      })
    } 
    //3 вопрос
    if(c3 == 1){
        document.querySelector(".p3_1").innerHTML="3.Тип государственного устройства, который предполагает широкое участие населения в делах управления посредством веча.";
        document.querySelector(".p3_2").innerHTML="А) Монархия с большой ролью боярства в жизни общества (сословная монархия) Б) Монархия с главенствующей ролью князя (абсолютная монархия) В)Боярская республика с решающей ролью вече";

        var button = document.querySelector(".b4");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i4").value;
          if(name == "А"){
            console.log("A")
        }
        if(name == "Б"){
            console.log("Б")
        }
        if(name == "В"){
            console.log("В")
            i++
        }
        
      })
    } 
    if(c3 == 2){
        document.querySelector(".p3_1").innerHTML="3.Период феодальной раздробленности характеризуется :";
        document.querySelector(".p3_2").innerHTML="А) обособлением земель-княжеств; Б) упадком городов и торговли; В) интенсивным развитием сельского хозяйства; Г) укреплением обороноспособности княжеств";
        var button = document.querySelector(".b4");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i4").value;
          if(name == "А"){
            console.log("A")
        }
        if(name == "Б"){
            console.log("Б")
            i++
        }
        if(name == "В"){
            console.log("В")
        }
        if(name == "Г"){
            console.log("Г")
    
        }
      })
    } 
    if(c3 == 3){
        document.querySelector(".p3_1").innerHTML="3.Прозвище «Тёмный» в истории получил московский правитель";
        document.querySelector(".p3_2").innerHTML="А) Василий I Б) Иван I В) Василий II Г) Иван III";
        var button = document.querySelector(".b4");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i4").value;
          if(name == "А"){
            console.log("A")
            i++
        }
        if(name == "Б"){
            console.log("Б")

        }
        if(name == "В"){
            console.log("В")

        }
        if(name == "Г"){
            console.log("Г")
    
        }
      })

    } 
    if(c3 == 4){
        document.querySelector(".p3_1").innerHTML="3.В результате Куликовской битвы:";
        document.querySelector(".p3_2").innerHTML="А) возросла роль Москвы как центра объединения русских земель; Б) была уничтожена Золотая Орда; В) Русь попала в зависимость от Казанского ханства; Г) усилилась зависимость Руси от Золотой Орды.";
        var button = document.querySelector(".b4");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i4").value;
          if(name == "А"){
            console.log("A")
            i++
        }
        if(name == "Б"){
            console.log("Б")
            i++
        }
        if(name == "В"){
            console.log("В")
            i++
        }
        if(name == "Г"){
            console.log("Г")
        }

      })
    } 
    if(c3 == 5){
        document.querySelector(".p3_1").innerHTML="3.Прозвище Невский князь Александр Ярославович получил за:";
        document.querySelector(".p3_2").innerHTML="А) проведение переписи населения в Новгороде Б) поездку к хану Орды за ярлыком В) победу над ордынцами Г) разгром шведского отряда";
        var button = document.querySelector(".b4");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i4").value;
          if(name == "А"){
            console.log("A")
        }
        if(name == "Б"){
            console.log("Б")
            i++
        }
        if(name == "В"){
            console.log("В")
        }
        if(name == "Г"){
            console.log("Г")
        }
      })
    }

    //4 вопрос
    if(c4 == 1){
        document.querySelector(".p4_1").innerHTML="4.Ордынские чиновники, которые собирали дань:";
        document.querySelector(".p4_3").innerHTML="А) бесермены Б) беки В) баскаки Г) эмиры";

        var button = document.querySelector(".b5");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i5").value;
          if(name == "А"){
            console.log("A")
        }
        if(name == "Б"){
            console.log("Б")
        }
        if(name == "В"){
            console.log("В")
            i++
        }
        if(name == "Г"){
            console.log("Г")
        }
        
      })
    } 
    if(c4 == 2){
        document.querySelector(".p4_1").innerHTML="4.Духовный лидер, от которого Дмитрий Иванович получил благословление накануне Куликовской битвы:";
        document.querySelector(".p4_3").innerHTML="А) Сергий Радонежский Б) митрополит Петр В) митрополит Алексий Г) патриарх Никон";
        var button = document.querySelector(".b5");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i5").value;
          if(name == "А"){
            console.log("A")
        }
        if(name == "Б"){
            console.log("Б")
            i++
        }
        if(name == "В"){
            console.log("В")
        }
        if(name == "Г"){
            console.log("Г")
    
        }
      })
    } 
    if(c4 == 3){
        document.querySelector(".p4_1").innerHTML="4.Князь, в правление которого Москва становится центром Русской православной церкви:";
        document.querySelector(".p4_3").innerHTML="А) Иван Калита Б) Дмитрий Донской В) Александр Невский";
        var button = document.querySelector(".b5");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i5").value;
          if(name == "А"){
            console.log("A")
            i++
        }
        if(name == "Б"){
            console.log("Б")

        }
        if(name == "В"){
            console.log("В")

        }
      })

    } 
    if(c4 == 4){
        document.querySelector(".p4_1").innerHTML="4.Прочтите отрывок из источника и укажите век, когда произошли описанные события.";
        document.querySelector(".p4_3").innerHTML="Это сражение произошло на льду озера. Враги были хорошо вооружены и были уверены в своей победе, но хитростью их удалось заманить на лед. Мужественно сражались русские воины и разгромили врага. Много было убито, взято в плен, а часть врагов ушла под тяжестью своих доспехов под лед.";
        document.querySelector(".p4_2").innerHTML="А) XII в. Б) XIII в. В) XIV в. Г) XV в.";
        var button = document.querySelector(".b5");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i5").value;
          if(name == "А"){
            console.log("A")
            i++
        }
        if(name == "Б"){
            console.log("Б")
            i++
        }
        if(name == "В"){
            console.log("В")
            i++
        }
        if(name == "Г"){
            console.log("Г")
        }

      })
    } 
    if(c4 == 5){
        document.querySelector(".p4_1").innerHTML="4.Река, на берегу которой произошло стояние войска Ивана III и Ахмата:";
        document.querySelector(".p4_3").innerHTML="А) Угра Б) Дон В) Непрядва Г) Калка";
        var button = document.querySelector(".b5");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i5").value;
          if(name == "А"){
            console.log("A")
        }
        if(name == "Б"){
            console.log("Б")
            i++
        }
        if(name == "В"){
            console.log("В")
        }
        if(name == "Г"){
            console.log("Г")
        }
      })
    }

    //5 вопрос
    if(c5 == 1){
        document.querySelector(".p5_1").innerHTML="5.21.Какое событие произошло позже всех?";
        document.querySelector(".p5_2").innerHTML="А) Первое упоминание о Москве Б) Крещение Руси В) Ледовое побоище Г) Принятие первого Судебника единого государства Д) Нашествие Батыя на Русь";

        var button = document.querySelector(".b6");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i6").value;
          if(name == "А"){
            console.log("A")
        }
        if(name == "Б"){
            console.log("Б")
        }
        if(name == "В"){
            console.log("В")
            i++
        }
        if(name == "Г"){
            console.log("Г")
        }
        if(name == "Д"){
            console.log("Д")
    
        }
        
      })
    } 
    if(c5 == 2){
        document.querySelector(".p5_1").innerHTML="5.Современниками были:";
        document.querySelector(".p5_2").innerHTML="А) Хан Мамай и Сергий Радонежский Б) Княгиня Ольга и Марфа Посадница В) Святослав и Цимисхий Г) Иван Калита и Тохтамыш";
        var button = document.querySelector(".b6");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i6").value;
          if(name == "А"){
            console.log("A")
        }
        if(name == "Б"){
            console.log("Б")
            i++
        }
        if(name == "В"){
            console.log("В")
        }
        if(name == "Г"){
            console.log("Г")
    
        }
      })
    } 
    if(c5 == 3){
        document.querySelector(".p5_1").innerHTML="5.К зависимому населению на Руси относились (укажите все зависимые слои населения)";
        document.querySelector(".p5_2").innerHTML="А) бояре Б) закупы В) люди Г) холопы Д) рядовичи Е) челядь Ж) смерды";
        var button = document.querySelector(".b6");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i6").value;
          if(name == "А"){
            console.log("A")
            i++
        }
        if(name == "Б"){
            console.log("Б")

        }
        if(name == "В"){
            console.log("В")

        }
        if(name == "Г"){
            console.log("Г")

        }
        if(name == "Д"){
            console.log("Д")

        }
        if(name == "Е"){
            console.log("Е")

        }
        if(name == "Ж"){
            console.log("Ж")

        }
      })

    } 
    if(c5 == 4){
        document.querySelector(".p5_1").innerHTML="5.Кто лишний в этом ряду?";
        document.querySelector(".p5_2").innerHTML="А) Дмитрий Иванович Б) Владимир Андреевич В) Дмитрий Боброк Г) Нестор";
        var button = document.querySelector(".b6");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i6").value;
          if(name == "А"){
            console.log("A")
            i++
        }
        if(name == "Б"){
            console.log("Б")
            i++
        }
        if(name == "В"){
            console.log("В")
            i++
        }
        if(name == "Г"){
            console.log("Г")
        }

      })
    } 
    if(c5 == 5){
        document.querySelector(".p5_1").innerHTML="5.Ниже приведен перечень терминов. Все они, за исключением одного, обозначают занятия восточных славян. Найдите и укажите термин, выпадающий из этого ряда.";
        document.querySelector(".p5_2").innerHTML="А) Земледелие  Б) кочевое скотоводство В) охота Г) ремесло Д) рыболовство";
        var button = document.querySelector(".b6");
        button.addEventListener("click", function() {
          var name = document.querySelector(".i6").value;
          if(name == "А"){
            console.log("A")
            document.querySelector(".p6_1").innerHTML="Оценка - " + i;
        }
        if(name == "Б"){
            console.log("Б")
            i++
            document.querySelector(".p6_1").innerHTML="Оценка - " + i;
        }
        if(name == "В"){
            console.log("В")
            document.querySelector(".p6_1").innerHTML="Оценка - " + i;
        }
        if(name == "Г"){
            console.log("Г")
            document.querySelector(".p6_1").innerHTML="Оценка - " + i;
        }
        if(name == "Д"){
            console.log("Д")
            document.querySelector(".p6_1").innerHTML="Оценка - " + i;
        }
      })
    }
}
