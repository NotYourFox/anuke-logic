const anuke = global.anuke = {
	/* Mimic @RegisterStatement */
	register(name, statement, def) {
		LAssembler.customParsers.put(name, func(statement.new));

		LogicIO.allStatements.add(prov(() => statement.new(def)));
	}
};

const add = (type, names) => {
	for (var i in names) {
		var name = names[i];
		try {
			anuke[name] = require("anuke-logic-proc-fix/" + type + "/" + name);
		} catch (e) {
			Log.err("Failed to load anuke-logic-proc-fix script @/@.js: @ (@#@)",
				type, name, e, e.fileName,
				new java.lang.Integer(e.lineNumber));
			anuke[name] = null;
		}
	}
};


/* Instructions */
add("inst", ["proc-fix"]);
