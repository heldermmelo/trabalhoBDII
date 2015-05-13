Platform.Load("core", "1")

var tx = class(nome, operacao_nome){
	var nome
	this.nome=nome
	
	var operacao_nome
	this.operacao_nome=operacao_nome
	
	var write_TS
	var read_TS
	var estado
	
	var TS
	TS = DateTime.SystemDateToLocalDate(sysDateTime);
	return new tx();
}
var operacao = function (tx){
		var name = tx.operacao_nome
		if name=="read"{
			return name
			else 
		return "write"
		}
return operacao
}

gravaTS = function(tx,operacao){

if(operacao=="read"){
	var tx.read_TS = DateTime.SystemDateToLocalDate(sysDateTime);
	return tx.read_TS
	}else{
	var tx.write_TS = DateTime.SystemDateToLocalDate(sysDateTime);
	return tx.write_TS
	}
return gravaTS
}

var ts_basico = function(gravaTS,operacao, tx){
	if(operacao == "read"){
		if(tx.TS < tx.write_ts){
			tx.estado = "ABORT"
			tx.estado = "REINICIAR"
			tx.TS = DateTime.SystemDateToLocalDate(sysDateTime)
			
		}else if{
			tx.estado="EM LEITURA"
				if(tx.read_ts<tx.TS){
					tx.read=tx.TS
				}
	
	}else if(operacao=="write"){
		if(tx.TS < tx.read_ts || tx.TS < tx.write_ts){
			tx.estado="ABORT"
			tx.estado="REINICIAR"
			tx.TS = DateTime.SystemDateToLocalDate(sysDateTime);
		}else{
			tx.estado = "EM ESCRITA";
			tx.ts_write = tx.TS;
		}	
		}
	}
}
var t1 = new tx(t1, "READ")
operacao(t1)
ts_basico(gravaTS(operacao(t1), t1),operacao(t1), t1)
console.log(t1)

t1.nome_operacao = "WRITE" 
operacao(t1)
ts_basico(gravaTS(operacao(t1), t1),operacao(t1), t1)
console.log(t1)

var t2 = new tx(t2, "READ")
operacao(t2)
ts_basico(gravaTS(operacao(t2), t2),operacao(t2), t2)
console.log(t2)

t2.nome_operacao = "WRITE" 
operacao(t2)
ts_basico(gravaTS(operacao(t2), t2),operacao(t2), t2)
console.log(t2)

t1.estado="COMMIT"
console.log(t1)


 


