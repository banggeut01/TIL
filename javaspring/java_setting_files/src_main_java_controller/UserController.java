package com.ssafy.itda.itda_test.controller;

import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.itda.itda_test.model.User;
import com.ssafy.itda.itda_test.service.IUserService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

//http://localhost:8197/humans/swagger-ui.html
@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/api")
@Api(value = "SSAFY", description = "SSAFY Resouces Management 2019")
public class UserController {
	public static final Logger logger = LoggerFactory.getLogger(UserController.class);

	@Autowired
	private IUserService memService;

	@ApiOperation(value = "모든 회원의 정보를 반환한다.", response = List.class)
	@RequestMapping(value = "/Users", method = RequestMethod.GET)
	public ResponseEntity<List<User>> Users() throws Exception {
		logger.info("1-------------Users-----------------------------" + new Date());
		List<User> mems = memService.getAllUsers();
		if (mems.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<User>>(mems, HttpStatus.OK);
	}

	@ApiOperation(value = "ID에 해당하는 회원의 정보를 반환한다.", response = User.class)
	@RequestMapping(value = "/User/{id}", method = RequestMethod.GET)
	public ResponseEntity<User> User(@PathVariable String id) throws Exception {
		logger.info("1-------------User-----------------------------" + new Date());
		User mem = memService.getUser(id);
		if (mem == null || mem.getId() == null || mem.getId().equals("")) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<User>(mem, HttpStatus.OK);
	}

	@ApiOperation(value = " 새로운 회원의 정보를 입력한다.", response = UserResult.class)
	@RequestMapping(value = "/signUp", method = RequestMethod.POST)
	public ResponseEntity<UserResult> signUp(@RequestBody User dto) throws Exception {
		logger.info("5-------------signUp-----------------------------" + new Date());
		logger.info("5-------------signUp-----------------------------" + dto);
		if (dto.getAllergys() != null) {
			String[] allergys = dto.getAllergys();
			StringBuilder sb = new StringBuilder();
			for (int i = 0; i < allergys.length; i++) {
				if (i == allergys.length - 1) {
					sb.append(allergys[i]);
				} else {
					sb.append(allergys[i]).append(",");
				}
			}
			dto.setAllergy(sb.toString());
		}

		User mem = memService.getUser(dto.getId());
		UserResult mr = new UserResult();
		if (mem != null) {
			mr.setName("이미 존재하는 회원ID입니다.");
			mr.setState("false");
			return new ResponseEntity<UserResult>(mr, HttpStatus.OK);
		}
		mem = memService.emailCheck(dto.getEmail());
		if (mem != null) {
			mr.setName("이미 존재하는 email입니다.");
			mr.setState("false");
			return new ResponseEntity<UserResult>(mr, HttpStatus.OK);
		}
		memService.signUp(dto);
		mr.setId(dto.getId());
		mr.setName("성공적으로 회원가입이 완료되었습니다.");
		mr.setState("succ");
		return new ResponseEntity<UserResult>(mr, HttpStatus.OK);
	}

	@ApiOperation(value = " 회원의 정보가 일치하면 로그인한다.", response = UserResult.class)
	@RequestMapping(value = "/signIn", method = RequestMethod.POST)
	public ResponseEntity<UserResult> signIn(@RequestBody User dto) throws Exception {
		logger.info("5-------------signIn-----------------------------" + new Date());
		logger.info("5-------------signIn-----------------------------" + dto);
		System.out.println(dto.getAllergy());
		User mem = memService.signIn(dto);
		UserResult mr = new UserResult();
		if (mem == null || mem.getId() == null || mem.getId().equals("")) {
			mr.setLogin(false);
			mr.setName("로그인에 실패했습니다.");
			mr.setState("fail");
			return new ResponseEntity<UserResult>(mr, HttpStatus.OK);
		}
		mr.setId(mem.getId());
		mr.setLogin(true);
		mr.setEmail(mem.getEmail());
		mr.setAllergy(mem.getAllergy());
		mr.setAuth(mem.getAuth());
		mr.setName("성공적으로 로그인이 완료되었습니다.");
		mr.setState("succ");
		return new ResponseEntity<UserResult>(mr, HttpStatus.OK);
	}

	@ApiOperation(value = " 해당 회원의 정보를 삭제한다.", response = BoolResult.class)
	@RequestMapping(value = "/deleteUser/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<BoolResult> deleteUser(@PathVariable String id) throws Exception {
		logger.info("1-------------deleteUser-----------------------------" + new Date());
		logger.info("1-------------deleteUser-----------------------------" + id);
		User mem = memService.getUser(id);
		BoolResult br = new BoolResult();
		if (mem == null || mem.getId() == null || mem.getId().equals("")) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		} else {
			memService.deleteUser(id);
			br.setName("회원탈퇴가 성공적으로 처리되었습니다.");
			br.setState("succ");
			return new ResponseEntity<BoolResult>(br, HttpStatus.OK);
		}
	}

	@ApiOperation(value = " 회원의 정보를 수정한다.", response = UserResult.class)
	@RequestMapping(value = "/updateUser", method = RequestMethod.PUT)
	public ResponseEntity<UserResult> updateUser(@RequestBody User dto) throws Exception {
		logger.info("5-------------updateUser-----------------------------" + new Date());
		logger.info("5-------------updateUser-----------------------------" + dto);
		if (dto.getAllergys() != null) {
			String[] allergys = dto.getAllergys();
			StringBuilder sb = new StringBuilder();
			for (int i = 0; i < allergys.length; i++) {
				if (i == allergys.length - 1) {
					sb.append(allergys[i]);
				} else {
					sb.append(allergys[i]).append(",");
				}
			}
			if(sb.toString().contains("해당없음")) {
				dto.setAllergy(null);
			}else {
				dto.setAllergy(sb.toString());
			}
		}
		memService.updateUser(dto);
		User mem = memService.getUser(dto.getId());
		UserResult mr = new UserResult();
		if (mem == null || mem.getId() == null || mem.getId().equals("")) {
			mr.setId("");
			mr.setName("회원 수정에 실패했습니다.");
			mr.setState("fail");
			return new ResponseEntity<UserResult>(mr, HttpStatus.OK);
		}
		mr.setId(mem.getId());
		mr.setLogin(true);
		mr.setEmail(mem.getEmail());
		mr.setAllergy(mem.getAllergy());
		mr.setAuth(mem.getAuth());
		mr.setName("성공적으로 회원 수정을 완료했습니다.");
		mr.setState("succ");
		return new ResponseEntity<UserResult>(mr, HttpStatus.OK);
	}
}